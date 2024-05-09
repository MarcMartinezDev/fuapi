import { useCon } from "../../context/ContextProvaider";
import React, { useState } from "react";

const NavSection = ({ section, children }) => {
  const { setResponsiveMenu } = useCon();
  const [isSectionActive, setIsSectionActive] = useState(true);
  return (
    <section className="mb-4">
      <button
        className="text-lg font-semibold cursor-pointer text-left"
        onClick={() =>
          isSectionActive ? setIsSectionActive(false) : setIsSectionActive(true)
        }
      >
        {section}
      </button>
      {isSectionActive && (
        <ul
          className={`${
            isSectionActive ? "flex" : "hidden"
          } mt-4 flex-col text-sm gap-2`}
          onClick={() => setResponsiveMenu(false)}
        >
          {children}
        </ul>
      )}
    </section>
  );
};

export default NavSection;
