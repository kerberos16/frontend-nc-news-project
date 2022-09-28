import * as api from '../../utils/api'
import { useEffect, useState } from 'react';
import ArticleCard from '../article-card/article-card';
import '../../App.css'

const Home = () => {

  const [topFiveList, setTopFiveList] = useState([]);

  useEffect(() => {
    api.getArticles().then(articles => {
      setTopFiveList(articles)
    })
  })


  const topFiveFinalList = [...topFiveList].sort((a,b) => b.comment_count - a.comment_count).slice(0,5)

  return (
    <div>
      <h1 className='home-title'>Currently Trending</h1>
      {topFiveFinalList.map((article) => {
        return(
          <ArticleCard key={article.article_id} article={article}/>
        )
      })}
    </div>
  )
}

export default Home
