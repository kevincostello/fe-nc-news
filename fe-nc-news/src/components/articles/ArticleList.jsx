import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList(props) {
  return (
    <>
      {props.articles.map(article => {
        return (
          <main key={article.article_id}>
            <ArticleCard key={article.article_id} {...article} />
            {/* <button onClick={props.clicker} value={1}>
              ⬆ Vote for me please!
            </button>
            <button onClick={props.clicker} value={-1}>
              ⬇ I am unhappy now :(
            </button> */}
          </main>
        );
      })}
    </>
  );
}

export default ArticleList;
