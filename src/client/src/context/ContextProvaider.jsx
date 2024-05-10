import React, { createContext, useContext, useState } from "react";

const context = createContext();

export const useCon = () => useContext(context);

const ContextProvaider = ({ children }) => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const [menu, setMenu] = useState("home");
  return (
    <context.Provider
      value={{ responsiveMenu, setResponsiveMenu, menu, setMenu }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvaider;
