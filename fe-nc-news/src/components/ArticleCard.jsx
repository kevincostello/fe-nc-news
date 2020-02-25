import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard({ title, topic, article_id, created_at }) {
  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
        <h3>{created_at}</h3>
      </Link>

      {/* <h3>Topic: {topic}</h3> */}
    </li>
  );
}
