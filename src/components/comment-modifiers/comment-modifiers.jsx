import * as api from "../../utils/api";
import "./comment-modifiers.css";
import { useState } from "react";

const CommentModifiers = ({ comment }) => {
  const [disableUp, setDisableUp] = useState(false);
  const [disableDown, setDisableDown] = useState(false);

  const [singleComment, setSingleComment] = useState([]);

  const deleteComment = () => {
    api.deleteComment(comment.comment_id).then((res) => console.log(res))}

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
  };

  return (
    <div>
      <button
        className="comment-button"
        type="button"
        onClick={() => handleCommentVotes(1)}
      >
        <span>&#9650;</span>
        <span>Vote Up</span>
      </button>
      <button
        className="comment-button"
        type="button"
        onClick={() => handleCommentVotes(-1)}
        disabled={disableUp}
      >
        <span>&#9660;</span>
        <span>Vote Down</span>
      </button>
      <button
        className="comment-button"
        type="button"
        onClick={deleteComment}
        disabled={disableDown}
      >
        <span>&#10006;</span>
        <span>Delete</span>
      </button>
    </div>
  );
};

export default CommentModifiers;
