import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
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
        {this.state.articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
