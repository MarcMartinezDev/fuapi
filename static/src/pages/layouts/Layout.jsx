import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useEffect } from "react";
import { useCon } from "../../context/ContextProvaider";

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
