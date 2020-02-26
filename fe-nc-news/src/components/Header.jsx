import React from "react";
import northc from "../components/not-northcoders.jpg";

function Header() {
  return (
    <header>
      <h1>!NC news (It's the truth.....honest!)</h1>
      <img src={northc} alt="icon"></img>
    </header>
  );
}

export default Header;
