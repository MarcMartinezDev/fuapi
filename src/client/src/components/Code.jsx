import React from "react";

const Code = ({ method, resource, id }) => {
  return (
    <pre>
      {method === "GET" ? (
        <code id={`clip-${id}`}>
          fetch('{window.location.origin}/api/v1/{resource}') <br />
          &nbsp;.then(res=&gt;res.json()) <br />
          &nbsp;.then(json=&gt;console.log(json))
        </code>
      ) : method === "DELETE" ? (
        <code id={`clip-${id}`}>
          fetch('{window.location.origin}/api/v1/{resource}', &#123; <br />
          &nbsp;method: "DELETE", <br />
          &#125;) <br />
          &nbsp;.then(res=&gt;res.json()) <br />
          &nbsp;.then(json=&gt;console.log(json))
        </code>
      ) : (
        <code id={`clip-${id}`}>
          fetch('{window.location.origin}/api/v1/{resource}', &#123; <br />
          &nbsp;method: "{method}", <br />
          &nbsp;body: JSON.stringify(your-data), <br />
          &#125;) <br />
          &nbsp;.then(res=&gt;res.json()) <br />
          &nbsp;.then(json=&gt;console.log(json))
        </code>
      )}
    </pre>
  );
};

export default Code;
