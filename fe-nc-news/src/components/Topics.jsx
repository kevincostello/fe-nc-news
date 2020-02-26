import React from "react";
import ArticleList from "./ArticleList";
import * as api from "../api";

class Topics extends React.Component {
  state = {
    articles: [],
    isSorted: false
  };
  render() {
    console.log("rendering");
    return (
      <main>
        <ArticleList articles={this.state.articles} />
      </main>
    );
  }

  sortBy = event => {
    console.log("sorted", event.target.name);
    let query = { topic: "football" };
    if (this.state.isSorted === false) {
      query.sort_by = event.target.name;
      query.order = "asc";
    } else {
      query.sort_by = event.target.name;
      query.order = "desc";
    }

    return api.getArticles(query).then(articles => {
      this.setState(currentState => {
        return { articles, isSorted: !currentState.isSorted };
      });
    });
  };

  componentDidMount() {
    console.log("mounting");
    let query = { topic: "football" };
    return api.getArticles(query).then(articles => {
      this.setState({ articles });
    });
  }
}

export default Topics;
