import React from "react";
import axios from "axios";

function CommentsByArticleId(props) {
  console.log("are we in here?", props);
  return (
    <main>
      <ul>
        {axios
          .get(
            `https://heroku-my-data.herokuapp.com/api/articles/${props.article_id}/comments`
          )
          .then(response => {
            // console.log("the comments are:", response.data);
          })
          .catch(err =>
            console.log("the error in comments by article id is: ", err)
          )}
      </ul>
    </main>
  );
}

export default CommentsByArticleId;
