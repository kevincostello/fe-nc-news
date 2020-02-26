import React from "react";
import ArticleList from "./ArticleList";
import * as api from "../api";

class ArticlesByTopic extends React.Component {
  state = {
    articles: [],
    isSorted: false
  };
  render() {
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

        <h2 className="Topic">Topic: {this.props.topic}</h2>

        <ul className="flex-container">
          <ArticleList articles={this.state.articles} />
        </ul>
      </main>
    );
  }

  callSortFunc = event => {
    const query = api.sortBy(event, this.state.isSorted, this.props.topic);
    return api.getArticles(query).then(articles => {
      this.setState(currentState => {
        return { articles, isSorted: !currentState.isSorted };
      });
    });
  };

  componentDidMount() {
    console.log("mounting");
    let query = { topic: this.props.topic };
    // let query = { topic: "football" };
    return api.getArticles(query).then(articles => {
      this.setState({ articles });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      let query = { topic: this.props.topic };
      // let query = { topic: "football" };
      return api.getArticles(query).then(articles => {
        this.setState({ articles });
      });
    }
  }
}

export default ArticlesByTopic;
