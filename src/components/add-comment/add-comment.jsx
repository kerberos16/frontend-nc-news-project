import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from '../../utils/api';
import './add-comment.css';
 
const AddComment = () => {

    const {id} = useParams()
    
    const [addCommentUsername, setAddCommentUsername] = useState("")
    const [addCommentBody, setAddCommentBody] = useState("")
    const [addComment, setAddComment] = useState("")
 
    const handleSubmit = (event) => {
        const commentToAdd = {
            username: addCommentUsername,
            body: addCommentBody
        };

        event.preventDefault();

        api.postComment(id, commentToAdd)
        .then((res) => {
            setAddComment((currComment) => [...currComment, res.data.comment])
        }).catch((err) => {
            console.log(err)
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
        </form>
    )
}

export default AddComment