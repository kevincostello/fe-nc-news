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

        {/* <Link>
          <button>Coding</button>
        </Link>

        <Link>
          <button>Cooking</button>
        </Link> */}
      </form>
    </nav>
  );
}

export default Nav;
