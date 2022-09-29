import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../../utils/api';
import './add-comment.css';
 
const AddComment = () => {

    const {id} = useParams()
    
    const [addCommentUsername, setAddCommentUsername] = useState("")
    const [addCommentBody, setAddCommentBody] = useState("")
    const [addComment, setAddComment] = useState("")
    const [addSuccess, setAddSuccess] = useState(false)
    const [postMessageHide, setpostMessageHide] = useState({isHidden : true})
    
    const hiddenStyle = {visibility: postMessageHide.isHidden ? 'hidden' : 'visible'}

    const handleSubmit = (event) => {
        const commentToAdd = {
            username: addCommentUsername,
            body: addCommentBody
        };

        event.preventDefault();

        api.postComment(id, commentToAdd)
        .then((res) => {
            setAddComment((currComment) => [...currComment, res.data.comment])
            setAddSuccess(true);
            setpostMessageHide(false)
        }).catch((err) => {
            setAddSuccess(false)
            setpostMessageHide(false)
        })

        setAddCommentUsername("");
        setAddCommentBody("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={addCommentUsername}
                className="comment-to-post"
                name="comment-author"
                placeholder="Type in your username"
                required
                onChange={(e) => setAddCommentUsername(e.target.value)}
            />
            <br />
            <textarea
                className="textarea"
                value={addCommentBody}
                name="comment-body"
                placeholder="Write your comment here"
                required
                onChange={(e) => setAddCommentBody(e.target.value)}
                />
            <br />
            <button className="voting-button">Post your comment</button>
            <p className="post-comment-status" style={hiddenStyle}>
                {addSuccess 
            ? <span className="post-comment-status-success" style={hiddenStyle}>Your comment has been added below. Note that all comments are sorted by number of votes</span> 
            : <span className="post-comment-status-fail" style={hiddenStyle}> Your comment could not be added: Please log in or sign up first</span>}
            </p>
        </form>
    )
}

export default AddComment