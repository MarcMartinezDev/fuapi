import ClipboardJS from "clipboard";
import Information from "./Information";
import React, { useEffect, useState } from "react";
import Code from "../Code";

const Section = ({ id, title, description, fetch, method, additional }) => {
  new ClipboardJS(".clipboard");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isCopied && setIsCopied(false);
    }, 4000);
  }, [isCopied]);

  return (
    <article className="flex flex-col" id={id}>
      <h3>{title}</h3>
      <p className="mb-5">{description}</p>
      <pre className="relative">
        <Code method={method} resource={fetch} id={id} />
        <button
          className="clipboard absolute top-0 right-0 pr-4 pt-2"
          data-clipboard-target={`#clip-${id}`}
          onClick={() => (!isCopied ? setIsCopied(true) : setIsCopied(false))}
        >
          {isCopied ? "copied!" : "copy"}
        </button>
      </pre>
      {additional && <Information information={additional} />}
    </article>
  );
};

export default Section;
