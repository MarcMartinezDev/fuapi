import { Link } from "react-router-dom";
import { useCon } from "../context/ContextProvaider";
import { routes } from "../../config";
import React from "react";

const Menu = () => {
  const { menu, setMenu } = useCon();
  return (
    <nav>
      <ul className="flex gap-4 flex-wrap">
        <li className={menu === routes.home ? "menu-active" : null}>
          <Link to="/" onClick={() => setMenu(routes.home)}>
            Home
          </Link>
        </li>
        <li className={menu === routes.docs ? "menu-active" : null}>
          <Link to="/docs" onClick={() => setMenu(routes.docs)}>
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/MarcMartinezDev/fuapi"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
