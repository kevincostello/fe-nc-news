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
    console.log("rendering");
    return (
      <>
        <button onClick={this.sortBy} name="created_at">
          Sort Articles by: Date created
        </button>
        <button onClick={this.sortBy} name="comment_count">
          Sort Articles by: Comment count
        </button>
        <button onClick={this.sortBy} name="votes">
          Sort Articles by: Votes
        </button>
        <ul>
          <ArticleList articles={this.state.articles} />
        </ul>
      </>
    );
  }

  getArticles = query => {
    const { sort_by, order } = query;
    console.log(sort_by, order);
    return axios
      .get("https://heroku-my-data.herokuapp.com/api/articles", {
        params: { sort_by, order }
      })
      .then(response => {
        console.log("in here", response.data.articles);
        return response.data.articles;
      });
  };

  sortBy = event => {
    console.log("sorted", event.target.name);
    let query = {};
    if (this.state.isSorted === false) {
      query.sort_by = event.target.name;
      query.order = "asc";
    } else {
      query.sort_by = event.target.name;
      query.order = "desc";
    }

    return this.getArticles(query).then(articles => {
      this.setState(currentState => {
        return { articles, isSorted: !currentState.isSorted };
      });
    });
  };

  componentDidMount() {
    console.log("mounting");
    return this.getArticles({}).then(articles => {
      this.setState({ articles });
    });
  }
}

export default Articles;
