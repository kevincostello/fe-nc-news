import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList(props) {
  return (
    <>
      {props.articles.map(article => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </>
  );
}

export default ArticleList;
