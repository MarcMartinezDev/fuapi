import { Outlet, useLocation } from "react-router-dom";
import { useCon } from "../../context/ContextProvaider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useEffect } from "react";
import { routes } from "../../../config";

const Layout = () => {
  const { setMenu } = useCon();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === routes.home) {
      setMenu(routes.home);
    } else if (location.pathname === routes.docs) {
      setMenu(routes.docs);
    }
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
