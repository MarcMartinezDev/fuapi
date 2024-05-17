import { Link } from "react-router-dom";
import Menu from "./Menu";
import React from "react";
import { useCon } from "../context/ContextProvaider";
import { routes } from "../../config";

const Header = () => {
  const { menu } = useCon();
  return (
    <header
      className={
        menu === routes.docs ? "lg:w-1/2" : "md:w-2/3 lg:w-2/3 xl:w-1/2"
      }
    >
      <div className="flex m-auto justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.png" alt="Logo of FuAPI" width={40} height={40} />
          </Link>
          <h1 className="text-lg hidden md:block">FuAPI</h1>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
