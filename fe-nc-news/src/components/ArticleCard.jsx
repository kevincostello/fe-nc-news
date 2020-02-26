import React from "react";
import { Link } from "@reach/router";
import { clicker } from "../api";

export default function ArticleCard({
  title,
  topic,
  article_id,
  created_at,
  comment_count,
  votes
}) {
  return (
    <li className="flex-item">
      <Link to={`/articles/${article_id}`}>
        <h2>Article ID: {article_id}</h2>
        <h2>{title}</h2>
        <h3>{topic}</h3>
        <h3>{created_at}</h3>
        <h4>Comment count: {comment_count}</h4>
        <h5>Votes: {votes}</h5>
        <button onClick={clicker}>Vote for me please!</button>
      </Link>

      {/* <h3>Topic: {topic}</h3> */}
    </li>
  );
}
