import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleById from "./components/ArticleById";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesByTopic from "./components/ArticlesByTopic";
import About from "./components/About";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
        <ArticlesByTopic path="/articles/topics/:topic" />
        <Comments path="/articles/:article_id/comments" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
