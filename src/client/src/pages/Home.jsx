import { getPeopleById } from "../api/api.requests";
import CodeExample from "../components/home/CodeExample";
import CountResources from "../components/home/CountResources";
import LinkButton from "../components/home/LinkButton";
import React, { useState } from "react";
import Routes from "../components/home/Routes";
import { Link } from "react-router-dom";
import Code from "../components/Code";

const Home = () => {
  const [codeExample, setCodeExample] = useState(false);
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-40 mb-20 px-4 md:w-2/3 xl:w-1/2 m-auto">
      <div className="w-full flex flex-col mt-20">
        <div className="flex flex-col gap-20 items-center justify-between mb-20 lg:flex-row">
          <div className="w-full">
            <h1 className="font-semibold text-3xl">FuAPI</h1>
            <p className="text-lg">Get some fake data for your site.</p>
            <div className="flex flex-col gap-10 my-10 md:flex-row md:gap-2">
              <LinkButton route="docs" />
              <LinkButton route="github" />
            </div>
          </div>
          <img
            src="/main.webp"
            alt="image of FuAPI page"
            width={300}
            height={300}
          />
        </div>
        <div>
          <h2 className="text-2xl">What is FuAPI?</h2>
          <p>
            Fake User API is a REST API project that provides fake data about
            users so you can use it in your website or project for free.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">How to start ?</h2>
        <p className="mb-10">
          To start making a GET request to an API resource, you can use the
          fetch API or libraries like axios to handle HTTP requests.
        </p>
        <small className="block">code example</small>
        <Code method="GET" resource="users/1" />
        <button
          className="btn w-fit p-2 my-2"
          onClick={async () => {
            if (request === null) {
              setLoading(true);
              const req = await getPeopleById();
              setRequest(req);
              setCodeExample(true);
              setLoading(false);
            }
          }}
        >
          {loading ? "Loading..." : "Try it"}
        </button>
        {codeExample && (
          <>
            <small className="block">The response looks like this</small>
            <CodeExample request={request} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-20 items-center lg:flex-row">
        <div className="w-full">
          <h2 className="text-2xl">Resources</h2>
          <p className="mb-10">Currently the API has the following resources</p>
          <div className="flex flex-col gap-10">
            <CountResources countOf="users" count="20" />
            <CountResources countOf="posts" count="40" />
          </div>
        </div>
        <img
          src="/database.webp"
          alt="database resources of FuAPI"
          width={250}
          height={250}
        />
      </div>
      <div>
        <h2 className="text-2xl">Routes</h2>
        <p className="mb-10">FuAPI supports the next HTTP methods</p>
        <div className="flex flex-col gap-3">
          <Routes method="GET" route="/v1/users" />
          <Routes method="GET" route="/v1/users/{id}" />
          <Routes method="GET" route="/v1/users?limit={limit}" />
          <Routes method="GET" route="/v1/users?country={country}" />
          <Routes method="POST" route="/v1/create-user" />
          <Routes method="PUT" route="/v1/update-user/{id}" />
          <Routes method="DELETE" route="/v1/delete-user/{id}" />
          <Link to="/docs" className="btn w-fit p-2 my-4">
            See in docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
