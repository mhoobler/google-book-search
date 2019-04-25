import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to={"/"}>
        React Reading List

    </Link>
    <Link to={"./search"}>
        Search
    </Link>
      <Link to={"./saved"}>
        Saved
      </Link>
    </nav>
  );
}

export default Nav;
