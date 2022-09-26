import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './articles.css'
import ArticleCard from '../article-card/article-card'

const Articles = () => {

  const [artcilesList, setArticlesList] = useState([]);

  useEffect(() => {
    axios
    .get("https://sizens-nc-news-app.herokuapp.com/api/articles")
    .then((res) => {
      console.log(res)
      setArticlesList(res.data.articles)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {artcilesList.map((article) => {
        return (
          <ArticleCard key={article.article_id} article={article} setArticlesList={setArticlesList}/>
        );
      })}
    </div>
  )
}

export default Articles
