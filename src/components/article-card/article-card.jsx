import "./article-card.css";
import { useNavigate } from "react-router-dom";
import * as api from '../../utils/api'
import axios from "axios";
import { useState } from "react";


const ArticleCard = ({ article, setArticlesList }) => {

  const [selectedArticle, setSelectedArticle] = useState(article)
  const [disable, setDisable] = useState(false)

  const addVote = () => {
    axios
    .patch(
      `https://sizens-nc-news-app.herokuapp.com/api/articles/${article.article_id}`,
      {
        inc_votes: 1
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

    setSelectedArticle((currentSelectedArticle) => {
        return {...currentSelectedArticle, votes: currentSelectedArticle.votes + 1}
      })
      setDisable(true)
  }

  const removeVote = () => {
    axios
    .patch(
      `https://sizens-nc-news-app.herokuapp.com/api/articles/${article.article_id}`,
      {
        inc_votes: -1
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

    setSelectedArticle((currentSelectedArticle) => {
        return {...currentSelectedArticle, votes: currentSelectedArticle.votes - 1}
      })
      setDisable(true)
  }

  const navigate = useNavigate()
  const onArticleClickHandler = () => navigate(`/articles/${article.article_id}`)

  return (
    <div className="article-container" key={article.article_id}>
   
      <h2 className="article-title" onClick={onArticleClickHandler}>{article.title}</h2>
       
      <h3 className="article-author">
        Posted by {article.author} on {article.created_at.slice(0, 10)}
      </h3>
      <h4>TOPIC: {article.topic}</h4>
      <div className="article-voting">
        <button type="button" onClick={addVote} disabled={disable}>
          <span>&#9650;</span>
          <span>Vote up</span>
        </button>
        <button type="button" onClick={removeVote} disabled={disable}>
          <span>&#9660;</span>
          <span>Vote down</span>
        </button>       
        <h4>
        Votes: {selectedArticle.votes} Comments: {article.comment_count}
      </h4>
      </div>        


    </div>
  );
};

export default ArticleCard;
