import ClipboardJS from "clipboard";
import Information from "./Information";
import React, { useEffect, useState } from "react";

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
        <code id={`clip-${id}`}>
          {method === "GET" ? (
            <>
              <span>
                fetch("{window.location.origin}/api/v1/{fetch}")
              </span>
              <span className="ml-5">
                .then(response =&gt; response.json())
              </span>
              <span className="ml-5">
                .then(response =&gt; console.log(response));
              </span>
            </>
          ) : method === "DELETE" ? (
            <>
              <span>
                fetch("{window.location.origin}/api/v1/{fetch}", &#123;
              </span>
              <span className="ml-5">method: "DELETE",</span>
              <span className="ml-5">
                headers: &#123; <br /> "Content-Type":"application/json" <br />
                <span>&#125;,</span>
              </span>
              <span>&#125;)</span>
              <span className="ml-5">
                .then(response =&gt; response.json())
              </span>
              <span className="ml-5">
                .then(response =&gt; console.log(response));
              </span>
            </>
          ) : (
            <>
              <span>
                fetch("{window.location.origin}/api/v1/{fetch}", &#123;
              </span>
              <span className="ml-5">method: "{method}",</span>
              <span className="ml-5">
                headers: &#123; <br /> "Content-Type":"application/json" <br />
                <span>&#125;,</span>
              </span>
              <span className="ml-5">body: JSON.stringify(your-data), </span>
              <span>&#125;)</span>
              <span className="ml-5">
                .then(response =&gt; response.json())
              </span>
              <span className="ml-5">
                .then(response =&gt; console.log(response));
              </span>
            </>
          )}
        </code>
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
