import { Link } from "react-router-dom";
import { useCon } from "../context/ContextProvaider";
import React from "react";

const Menu = () => {
  const { menu, setMenu } = useCon();
  return (
    <nav>
      <ul className="flex gap-4 flex-wrap">
        <li className={menu === "home" ? "menu-active" : null}>
          <Link to="/" onClick={() => setMenu("home")}>
            Home
          </Link>
        </li>
        <li className={menu === "docs" ? "menu-active" : null}>
          <Link to="/docs" onClick={() => setMenu("docs")}>
            Docs
          </Link>
        </li>
        <li>
          <Link to="https://www.github.com" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
