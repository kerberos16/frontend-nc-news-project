import ArticleCard from '../article-card/article-card'
import './articles.css'

import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Articles = () => {

  const {topic} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [artcilesList, setArticlesList] = useState([]);
  const [params, setParams] = useState({})
  const [sortBy, setSortBy] = useState("created_at")
  const [orderBy, setOrderBy] = useState("desc")
  // setParams({topicSlug});

    useEffect(() => {
      setIsLoading(true);
      api.getArticles(params).then((articles) => {
        setArticlesList(articles);
        setIsLoading(false)
      })
    }, [topic, params])

    useEffect(() => {
      setParams((currentParams) => {
        return{...currentParams, topic: topic, sort_by: sortBy, order: orderBy}
      })
    }, [topic, sortBy, orderBy])

    if(isLoading){
      return <p>Loading....</p>
    }

  return (
    <div className='articles-container'>
      <label htmlFor="sort-by">SORT BY:</label>
        <select onChange={(e) => setSortBy(e.target.value)} name="sort_by" id="sort_by">
          <option value={"choose option"}>Choose sorting</option>
          <option value={"created_at"}>Date</option>
          <option value={"comment_count"}>Comment Count</option>
          <option value={"votes"}>Votes</option>
        </select>
        <label htmlFor="order">ORDER BY:</label>
        <select onChange={(e) => setOrderBy(e.target.value)} name="order" id="order">
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>      
      {artcilesList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article={article}/>
        );
      })}

    </div>
  )
}

export default Articles
