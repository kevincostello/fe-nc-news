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
        <button onClick={this.callSortFunc} name="created_at">
          Sort Articles by: Date created
        </button>
        <button onClick={this.callSortFunc} name="comment_count">
          Sort Articles by: Comment count
        </button>
        <button onClick={this.callSortFunc} name="votes">
          Sort Articles by: Votes
        </button>

        <ul>
          <ArticleList articles={this.state.articles} />
        </ul>
      </main>
    );
  }

  callSortFunc = event => {
    const query = api.sortBy(event, this.state.isSorted, "football");
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
