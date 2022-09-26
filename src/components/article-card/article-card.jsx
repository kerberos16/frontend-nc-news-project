import './article-card.css'

const ArticleCard = ({ article, setArticleList }) => {

  return (
    <div className="article-container" key={article.article_id}>
        <h2>{article.title}</h2>
        <div>
            In {article.topic} Posted by {article.author} on {article.created_at.slice(0,10)}
        </div>
        <div>
            Votes: {article.votes}
            Comments: {article.comments}
        </div>
    </div>
  )
}

export default ArticleCard
