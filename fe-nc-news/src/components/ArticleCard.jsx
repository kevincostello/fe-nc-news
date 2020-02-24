import React from "react";

export default function ArticleCard({ title, topic }) {
  console.log("article is", title);
  return (
    <li>
      <h2>Article: {title}</h2>
      <h3>Topic: {topic}</h3>
    </li>
  );
}
