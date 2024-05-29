import { USER_ARTICLES, POST_ARTICLES } from "../../config";
import Article from "../components/documentation/Article";
import Navbar from "../components/documentation/Navbar";
import React from "react";

const Documentation = () => {
  return (
    <div className="flex mx-2 xl:gap-20">
      <Navbar />
      <div className="flex flex-col gap-24 pb-20 m-auto lg:w-1/2 overflow-x-scroll">
        <h2 className="text-3xl">Overview</h2>
        <article id="overview" className="flex flex-col gap-4">
          <span className="p-2 rounded-md bg-[#AB65B7] bg-opacity-20 w-fit mb-10">
            version 1.0.0
          </span>
          <p>
            FuAPI provides fake data that you can use for free in your projects.
            FuAPI is currently in development, therefore it may experience
            changes over time, changes that will be reflected in this
            documentation.{" "}
          </p>
          <p>Here you'll find:</p>
          <ul className="list-disc p-4 bg-[#AB65B7] bg-opacity-20 pl-10 rounded-md">
            <li>GET Routes for make requests to the API</li>
            <li>PUT Routes for make requests to the API</li>
            <li>POST Routes for make requests to the API</li>
            <li>DELETE Routes for make requests to the API</li>
          </ul>
        </article>
        <h2 className="text-3xl">Users</h2>
        <div className="flex flex-col gap-52">
          {USER_ARTICLES.map(article => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              fetch={article.fecth}
              method={article.method}
              additional={article.additional}
            />
          ))}
        </div>
        <h2 className="text-3xl">Posts</h2>
        <div className="flex flex-col gap-52">
          {POST_ARTICLES.map(article => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              fetch={article.fetch}
              method={article.method}
              additional={article.additional}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
