import React from "react";

export default function ArticleCard({ title }) {
  console.log("title is:", title);
  return (
    <li>
      <h2>{title}</h2>
    </li>
  );
}
