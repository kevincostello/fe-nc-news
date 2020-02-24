import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ArticleList from "./ArticleList";

function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <ArticleList />
      <Footer />
    </main>
  );
}

export default Home;
