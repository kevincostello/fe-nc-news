import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class ArticleById extends Component {
  state = {
    article: {}
  };
  render() {
    const {
      article_id,
      title,
      body,
      topic,
      votes,
      comment_count,
      author,
      created_at
    } = this.state.article;
    return (
      <main>
        <h1>Topic: {topic}</h1>
        <h1>Article ID: {article_id}</h1>
        <h2>
          Title: {title}, Author: {author}
        </h2>
        <p>{body}</p>

        <h3>Votes: {votes}</h3>
        <Link to={`/articles/${article_id}/comments`}>
          <h3>Comments: {comment_count}</h3>
        </Link>
        <h4>Created_at: {created_at}</h4>
        <button onClick={this.clicker} value={1}>
          ⬆ Vote for me please!
        </button>
        <button onClick={this.clicker} value={-1}>
          ⬇ I am unhappy now :(
        </button>
      </main>
    );
  }

  getArticleById = () => {
    console.log("this.props", this.props);
    return axios
      .get(
        `https://heroku-my-data.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(response => {
        console.log("repsonse from api is:", response.data.article);
        return response.data.article;
      });
  };

  componentDidMount() {
    return this.getArticleById().then(article => {
      this.setState({ article });
    });
  }

  clicker = event => {
    event.preventDefault();
    console.log(event.target.value);
  };
}

export default ArticleById;
