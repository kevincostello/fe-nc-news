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

        <Link to="/topics">
          <button>Football</button>
        </Link>
        <button>Coding</button>
        <button>Cooking</button>
      </form>
    </nav>
  );
}

export default Nav;
