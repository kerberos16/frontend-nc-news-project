import * as api from "../../utils/api";
import "./comment-modifiers.css";
import { useState } from "react";

const CommentModifiers = ({ comment }) => {
  const [disableUp, setDisableUp] = useState(false);
  const [disableDown, setDisableDown] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false)
  const [singleComment, setSingleComment] = useState([]);

  const deleteComment = () => {
    api
      .deleteComment(comment.comment_id)
      .then((res) => setIsDeleted(true));
  };

  const handleCommentVotes = (num) => {
    const voteChangeOnComment = { inc_votes: num };
    api
      .updateVotesOnComment(comment.comment_id, voteChangeOnComment)
      .then((res) => console.log(res + "UPDATED VOTE"));

      setSingleComment((currentSingleComment) => {
        return {
          ...currentSingleComment,
          votes: currentSingleComment.votes + num,
        };
      });

      if(num < 0){
        setDisableDown(true)
      } else if(num > 0){
        setDisableUp(true)
      }


  };

  return (
    <div>
      <button
        className="comment-button"
        type="button"
        onClick={() => handleCommentVotes(1)}
        disabled={disableUp}
      >
        <span>&#9650;</span>
        <span>Vote Up</span>
      </button>
      <button
        className="comment-button"
        type="button"
        onClick={() => handleCommentVotes(-1)}
        disabled={disableDown}
      >
        <span>&#9660;</span>
        <span>Vote Down</span>
      </button>
      <button className="comment-button" type="button" onClick={deleteComment}>
        <span>&#10006;</span>
        <span>Delete</span>
      </button>
      <span>{isDeleted ? alert("The comment has been deleted") : <p></p>}</span>
    </div>
  );
};

export default CommentModifiers;
