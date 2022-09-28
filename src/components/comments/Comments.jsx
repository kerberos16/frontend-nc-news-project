import CommentCard from "../comment-card/comment-card";

import * as api from '../../utils/api'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {

    const {id} = useParams()

    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        api.getCommentsByArticleId(id).then(comments => {
            setCommentsList(comments)
        })
    }, [id]);

    const commentsByDate = [...commentsList].sort((a,b) => b.votes - a.votes)

    return (
        <div>
            {commentsByDate.map((comment) => {
                return (
                    <CommentCard key={comment.comment_id} comment={comment}/>
                )
            })}
        </div>
    )
}

export default Comments
