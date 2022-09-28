import './comment-card.css'

const CommentCard = ({comment}) => {

  return (
    <div className='comment-container'>
        <p>{comment.author}</p>
        <p>{comment.votes} votes &#9679; created at:{comment.created_at.slice(0, 10)}</p>
        <p>{comment.body}</p>
        <button className="comment-button" type="button">
          <span>&#9650;</span>
          <span>Vote Up</span>
        </button>
        <button className="comment-button" type="button">
          <span>&#9660;</span>
          <span>Vote Down</span>
          </button>
    </div>
  )
}

export default CommentCard
