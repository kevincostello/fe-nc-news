import React from "react";
import { Link } from "@reach/router";
import * as api from "../api";

function Nav() {
  return (
    <nav>
      <form>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>About</button>

        <Link to="/football">
          <button onClick={api.clicker} name="football">
            Football
          </button>
        </Link>

        <Link to="/coding" name="coding">
          <button>Coding</button>
        </Link>

        <Link to="/cooking" name="cooking">
          <button>Cooking</button>
        </Link>
      </form>
    </nav>
  );
}

export default Nav;
