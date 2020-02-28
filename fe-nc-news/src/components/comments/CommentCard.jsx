import React from "react";
import * as api from "../../api";
function CommentCard(
  { author, body, created_at, votes, article_id, comment_id },
  props
) {
  return (
    <>
      <li className="flex-item">
        <h2>{comment_id}</h2>
        <h2>{author}</h2>
        <h3>{body}</h3>
        <h3>{created_at}</h3>
        <h5>Votes: {votes}</h5>
      </li>
      <button
        onClick={event => api.deleteComment(comment_id, article_id, event)}
      >
        Delete comment
      </button>
    </>
  );
}

export default CommentCard;
