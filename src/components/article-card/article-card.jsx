import "./article-card.css";
import { useNavigate } from "react-router-dom";


const ArticleCard = ({ article }) => {

  const navigate = useNavigate()
  const onArticleClickHandler = () => navigate(`/articles/${article.article_id}`)

  return (
    <div className="article-container" key={article.article_id} onClick={onArticleClickHandler}>
   
      <h2 className="article-title">{article.title}</h2>
       
      <h3 className="article-author">
        Posted by {article.author} on {article.created_at.slice(0, 10)}
      </h3>
      <h4>TOPIC: {article.topic}</h4>
      <div className="article-voting">
        <button type="button">
          <span>&#9650;</span>
          <span>Vote up</span>
        </button>
        <button type="button">
          <span>&#9660;</span>
          <span>Vote down</span>
        </button>       
        <h4>
        Votes: {article.votes} Comments: {article.comment_count}
      </h4>
      </div>        


    </div>
  );
};

export default ArticleCard;
