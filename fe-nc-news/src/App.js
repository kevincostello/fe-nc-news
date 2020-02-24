import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleById from "./components/ArticleById";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
