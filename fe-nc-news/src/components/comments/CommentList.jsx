import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  return (
    <>
      {props.comments.map(comment => {
        return (
          <main key={comment.comment_id}>
            <CommentCard key={comment.comment_id} {...comment} />
            {/* <form action="" className="form">
              <button onClick={props.clicker} value={1}>
                ⬆ Vote for me please!
              </button>
              <button onClick={props.clicker} value={-1}>
                ⬇ I am unhappy now :(
              </button>
            </form> */}
          </main>
        );
      })}
    </>
  );
}

export default CommentList;
