import React from "react";
import axios from "axios";
import * as api from "../../api";

class CommentsByArticleId extends React.Component {
  state = {
    comments: []
  };
  render() {
    console.log("are we in here?", this.props);
    return (
      <main>
        <ul className="flex-container">
          <h2>Article id: {this.props.article_id}</h2>
          {this.state.comments.map(comment => {
            const { comment_id, author, body, votes, created_at } = comment;
            console.log("comment_id: ", comment_id);
            return (
              <li key={comment_id} className="flex-item">
                <h3>
                  Author: {author} Created at:
                  {created_at}
                </h3>
                <p> {body}</p>
                <h4>Votes: {votes}</h4>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
  getComments = () => {
    return axios
      .get(
        `https://heroku-my-data.herokuapp.com/api/articles/${this.props.article_id}/comments`
      )
      .then(response => {
        console.log("the comments are:", response.data);
        return response.data.comments;
      })
      .catch(err =>
        console.log("the error in comments by article id is: ", err)
      );
  };

  componentDidMount() {
    return this.getComments().then(comments => {
      console.log("comment: ", comments);
      this.setState({ comments });
    });
  }
}

export default CommentsByArticleId;
