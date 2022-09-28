import './comment-card.css'
import moment from "moment"
import CommentModifiers from '../comment-modifiers/comment-modifiers'

const CommentCard = ({comment}) => {

  const comment_date = moment(comment.created_at).utc().format('DD/MM/YYYY')

  return (
    <div className='comment-container'>
        <p>{comment.author}</p>
        <p>{comment.votes} votes &#9679; created at:{comment_date}</p>
        <p>{comment.body}</p>
        <CommentModifiers comment={comment}/>
    </div>
  )
}

export default CommentCard
