import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard(
  { title, topic, article_id, created_at, comment_count, votes },
  props
) {
  return (
    <li className="flex-item">
      <Link to={`/articles/${article_id}`} clicker={props.clicker}>
        <h2>{title}</h2>
        <h3>{topic}</h3>
        <h3>{created_at}</h3>
        <h4>Comment count: {comment_count}</h4>
        <h5>Votes: {votes}</h5>
      </Link>

      {/* <h3>Topic: {topic}</h3> */}
    </li>
  );
}
