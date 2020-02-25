import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav>
      <form>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>About</button>
        <button>Football</button>
        <button>Coding</button>
        <button>Cooking</button>
        <Link to="/articles">
          <button>Articles</button>
        </Link>
      </form>
    </nav>
  );
}

export default Nav;
