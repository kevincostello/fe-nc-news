import React from "react";
import { Link } from "@reach/router";

function Nav() {
  return (
    <nav>
      <form>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>

        <Link to="/articles/topics/football">
          <button name="football">Football</button>
        </Link>

        <Link to="/articles/topics/coding" name="coding">
          <button>Coding</button>
        </Link>

        <Link to="/articles/topics/cooking" name="cooking">
          <button>Cooking</button>
        </Link>
      </form>
    </nav>
  );
}

export default Nav;
