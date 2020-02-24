import React, { Component } from "react";
import ArticleList from "./ArticleList";
import axios from "axios";

class Articles extends Component {
  state = {
    articles: [
      {
        article_id: 33,
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        created_at: "2018-05-30T15:59:13.341Z",
        votes: 0,
        comment_count: 6,
        total_count: "36"
      },
      {
        article_id: 28,
        author: "happyamy2016",
        title: "High Altitude Cooking",
        topic: "cooking",
        created_at: "2018-05-27T03:32:28.514Z",
        votes: 0,
        comment_count: 5,
        total_count: "36"
      }
    ]
  };

  render() {
    return (
      <ul>
        <ArticleList articles={this.state.articles} />
      </ul>
    );
  }

  // componentDidMount() {
  //   this.getArticles();
  // }

  // getArticles = () => {
  //   axios
  //     .get("https://heroku-my-data.herokuapp.com/api/articles")
  //     .then(response => {
  //       return response.data.articles;
  //     });
  // };
}

export default Articles;
