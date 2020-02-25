import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard({ title, topic, article_id }) {
  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>

      {/* <h3>Topic: {topic}</h3> */}
    </li>
  );
}
