import Navbar from "../components/documentation/Navbar";
import React from "react";
import Section from "../components/documentation/Section";

const Documentation = () => {
  return (
    <div className="flex xl:gap-20">
      <div className="hidden navbar fixed top-20 overflow-y-scroll pb-20 h-screen shadow-md px-6 bg-[#f2f2f2] lg:sticky lg:block lg:min-w-[300px]">
        <Navbar />
      </div>
      <div className="flex flex-col gap-32 pb-20 px-4 max-w-full lg:w-2/3 xl:w-1/2">
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
        <Section
          id="get-users"
          title="GET all users"
          description="Returns all users from the database."
          fetch="users"
          method="GET"
        />
        <Section
          id="user-id"
          title="GET user by id"
          description="Returns the user that corresponds to the {id}<number>.
        "
          fetch="users/{id}"
          method="GET"
        />
        <Section
          id="user-limit"
          title="GET users with limit"
          description="Returns all users. {limit}<number> indicates the limit of users returned.
        "
          fetch="users?limit={limit}"
          method="GET"
        />
        <Section
          id="user-country"
          title="GET users from country"
          description="Returns all users filtered by {country}."
          fetch="users?country={country}"
          method="GET"
        />
        <Section
          id="user-create"
          title="POST create user"
          description="Create a new user and returns it (not saved in the database)."
          fetch="create-user"
          method="POST"
          additional="Remember that the new user is not actually saved in the database. So if you want to access the new id you will get a 404 error."
        />
        <Section
          id="user-update"
          title="PUT update user"
          description="Updates user by {id}<number> and returns it (not saved in the database).
        "
          fetch="update-user/{id}"
          method="PUT"
          additional="Remember that the updated user is not actually saved in the database. So if you want to access the new id you will get a 404 error."
        />
        <Section
          id="user-delete"
          title="DELETE delete user"
          description="Delete user by {id}<number> (not saved in the database)."
          fetch="delete-user/{id}"
          additional="Remember that the deleted user is not actually saved in the database."
          method="DELETE"
        />
        <h2 className="text-3xl">Posts</h2>
        <Section
          id="get-posts"
          title="GET all posts"
          description="Returns all posts from the database."
          fetch="posts"
          method="GET"
        />
        <Section
          id="post-id"
          title="GET post by id"
          description="Returns the post that corresponds to the {id}<number>."
          fetch="posts/{id}"
          method="GET"
        />
        <Section
          id="post-limit"
          title="GET posts with limit"
          description="Returns all posts. {limit}<number> indicates the limit of posts returned."
          fetch="posts?limit={limit}"
          method="GET"
        />
        <Section
          id="post-userId"
          title="GET posts by user ID"
          description="Returns all posts from the user {userId}<number>."
          fetch="posts?user={userId}"
          method="GET"
        />
        <Section
          id="post-create"
          title="POST create post"
          description="Create a new post and returns it (not saved in the database)."
          fetch="create-post"
          additional="Remember that the new user is not actually saved in the database. So if you want to access the new id you will get a 404 error."
          method="POST"
        />
        <Section
          id="post-update"
          title="PUT update post"
          description="Updates post by {id}<number> and returns it (not saved in the database).
        "
          fetch="update-post/{id}"
          method="PUT"
          additional="Remember that the updated user is not actually saved in the database. So if you want to access the new id you will get a 404 error."
        />
        <Section
          id="post-delete"
          title="DELETE delete post"
          description="Delete post by {id}<number> (not saved in the database)."
          fetch="delete-post/{id}"
          additional="Remember that the deleted post is not actually saved in the database."
          method="DELETE"
        />
      </div>
    </div>
  );
};

export default Documentation;
