import { Outlet, useLocation } from "react-router-dom";
import { useCon } from "../../context/ContextProvaider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useEffect } from "react";

const Layout = () => {
  const { setMenu } = useCon();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("home");
    } else {
      setMenu("docs");
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
