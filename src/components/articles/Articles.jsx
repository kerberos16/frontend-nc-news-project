import ArticleCard from '../article-card/article-card'
import './articles.css'

import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Articles = ({}) => {

  const {topicSlug} = useParams()
  const [artcilesList, setArticlesList] = useState([]);

  useEffect(() => {
    api.getArticles(topicSlug).then(articles => {
      setArticlesList(articles)
    })
  }, [topicSlug])

  return (
    <div className='articles-container'>
      {artcilesList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article={article} setArticlesList={setArticlesList}/>
        );
      })}
    </div>
  )
}

export default Articles
