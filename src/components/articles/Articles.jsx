import ArticleCard from '../article-card/article-card'
import './articles.css'
import Select from 'react-select'

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

  const sortingOptions = [
    { value: 'created_at', label: 'Date' },
    { value: 'votes', label: 'Votes' },
    { value: 'comment_count', label: 'Comments' }
  ]

  const orderingOptions = [
    { value: 'desc', label: 'Descending' },
    { value: 'asc', label: 'Ascending' },
  ]
  
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
    }, [topic, setSortBy, orderBy])

    if(isLoading){
      return <p>Loading....</p>
    }

  return (
    <div className='articles-container'>
      <label htmlFor="sort-by">SORT BY:</label>
          <Select
          options={sortingOptions}
          onChange={(choice) => (setSortBy(choice.value))}
          />
          
        <label htmlFor="order">ORDER BY:</label>
        <Select
          options={orderingOptions}
          onChange={(choice) => setOrderBy(choice.value)}
          />
      {artcilesList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article={article}/>
        );
      })}

    </div>
  )
}

export default Articles
