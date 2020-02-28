import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import * as api from "../../api";
import Voter from "../Voter";
class ArticleById extends Component {
  state = {
    article: {},
    newComment: {}
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

        <Link to={`/articles/${article_id}/comments`}>
          <h3>Comments: {comment_count}</h3>
        </Link>

        <form action="" className="form" onSubmit={this.addNewComment}>
          <label htmlFor="">
            Add new comment
            <textarea
              name=""
              id=""
              cols="40"
              rows="10"
              onChange={this.changeHandler}
            ></textarea>
          </label>
          <button>Submit new comment</button>
        </form>
        <h4>Created_at: {created_at}</h4>
        <Voter votes={votes} article_id={article_id} />
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

  changeHandler = event => {
    const { value } = event.target;
    console.log(value);
    this.setState({ newComment: { username: "weegembump", body: value } });
  };

  addNewComment = event => {
    event.preventDefault();
    console.log(this.state.newComment);
    return api
      .postComment(this.state.newComment, this.state.article.article_id)
      .then(results => {
        console.log(results);
      });
  };
}

export default ArticleById;
