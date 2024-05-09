import { getPeopleById } from "../api/api.requests";
import CodeExample from "../components/home/CodeExample";
import React, { useState } from "react";
import Routes from "../components/home/Routes";
import LinkButton from "../components/home/LinkButton";
import CountResources from "../components/home/CountResources";

const Home = () => {
  const [codeExample, setCodeExample] = useState(false);
  const [request, setRequest] = useState(null); // code example request

  return (
    <div className="flex flex-col gap-40 mb-20 px-4 md:w-2/3 xl:w-1/2 m-auto">
      <div className="w-full flex flex-col mt-20">
        <div className="flex flex-col gap-5 items-center justify-between mb-20 lg:flex-row">
          <div className="w-full">
            <h1 className="font-semibold text-3xl">Fake user API</h1>
            <p className="text-lg">Get some fake data for your site.</p>
            <div className="flex flex-col gap-10 my-10 md:flex-row md:gap-2">
              <LinkButton route="docs" />
              <LinkButton route="github" />
            </div>
          </div>
          <img
            src="/main.png"
            alt="image of FuAPI page"
            width={300}
            className="lg:w-[300px]"
          />
        </div>
        <div>
          <h2 className="text-2xl">What is Fake user API?</h2>
          <p>
            Fake user API is a REST API project that provides fake data about
            users so you can use it in your website or project for free.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">How to start ?</h2>
        <p className="mb-10">Try making a GET request to an API resource.</p>
        <small className="block">code example</small>
        <code>
          <p className="text-wrap">
            fetch("http://localhost:3000/api/user/1")
            <span className="ml-4 block">
              .then(response =&gt; response.json())
            </span>
            <span className="ml-4 block">
              .then(data =&gt; console.log(data));
            </span>
          </p>
        </code>
        <button
          className="link-button w-fit p-2 my-2"
          onClick={async () => {
            if (request === null) {
              const req = await getPeopleById(1);
              setRequest(req);
              setCodeExample(true);
            }
          }}
        >
          Try it
        </button>
        {codeExample && (
          <>
            <small className="block">The response looks like this</small>
            <CodeExample request={request} />
          </>
        )}
      </div>
      <div className="flex flex-col gap-10 items-center lg:flex-row">
        <div className="w-full">
          <h2 className="text-2xl">Resources</h2>
          <p className="mb-10">Currently the API has the following resources</p>
          <div className="flex flex-col gap-10">
            <CountResources countOf="users" />
            <CountResources countOf="posts" />
          </div>
        </div>
        <img src="/database.png" alt="" width={250} height={250} />
      </div>
      <div>
        <h2 className="text-2xl">Routes</h2>
        <p className="mb-10">All HTTP methods are supported!</p>
        <div className="flex flex-col gap-3">
          <Routes method="GET" route="/v1/users" />
          <Routes method="GET" route="/v1/users/{id}" />
          <Routes method="GET" route="/v1/users?limit={limit}" />
          <Routes method="GET" route="/v1/users?country={country}" />
          <Routes method="POST" route="/v1/create-user" />
          <Routes method="PUT" route="/v1/update-user/{id}" />
          <Routes method="DELETE" route="/v1/delete-user/{id}" />
          <a href="/docs" className="link-button w-fit p-2 my-4">
            See in docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
