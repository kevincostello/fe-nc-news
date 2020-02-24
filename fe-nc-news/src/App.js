import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ArticleList />
      <Footer />
    </div>
  );
}

export default App;
