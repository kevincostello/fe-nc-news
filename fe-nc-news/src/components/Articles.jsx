import React, { Component } from "react";
import ArticleList from "./ArticleList";
import * as api from "../api";

class Articles extends Component {
  state = {
    articles: [
      {
        article_id: 33,
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        created_at: "2018-05-30T15:59:13.341Z",
        votes: 12,
        comment_count: 6,
        total_count: "36"
      },
      {
        article_id: 28,
        author: "happyamy2016",
        title: "High Altitude Cooking",
        topic: "cooking",
        created_at: "2018-05-27T03:32:28.514Z",
        votes: 8,
        comment_count: 5,
        total_count: "36"
      }
    ],
    isSorted: false
  };

  render() {
    console.log("rendering: articles");
    return (
      <>
        <button onClick={this.callSortFunc} name="created_at">
          Sort Articles by: Date created
        </button>
        <button onClick={this.callSortFunc} name="comment_count">
          Sort Articles by: Comment count
        </button>
        <button onClick={this.callSortFunc} name="votes">
          Sort Articles by: Votes
        </button>
        <ul class="flex-container">
          <ArticleList articles={this.state.articles} />
        </ul>
      </>
    );
  }

  callSortFunc = event => {
    const query = api.sortBy(event, this.state.isSorted);
    return api.getArticles(query).then(articles => {
      this.setState(currentState => {
        return { articles, isSorted: !currentState.isSorted };
      });
    });
  };

  componentDidMount() {
    console.log("mounting");
    return api.getArticles({}).then(articles => {
      this.setState({ articles });
    });
  }
}

export default Articles;
