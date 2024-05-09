import { Link } from "react-router-dom";
import Menu from "./Menu";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex m-auto justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo of fake user api"
              width={40}
              className="min-w-[40px]"
            />
          </Link>
          <h1 className="text-lg hidden md:block">FuAPI</h1>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
