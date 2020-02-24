import React from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <ArticleList path="/articles" />
      </Router>
    </div>
  );
}

export default App;
