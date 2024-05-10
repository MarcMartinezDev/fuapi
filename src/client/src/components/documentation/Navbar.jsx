import NavSection from "./NavSection";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-5 flex-col mt-0">
      <div>
        <h3>About</h3>
        <a href="#overview">Overview</a>
      </div>
      <div className="flex flex-col">
        <h3>API Reference</h3>
        <div>
          <NavSection section="Users">
            <a href="#get-users">GET all</a>
            <a href="#user-id">GET by id</a>
            <a href="#user-limit">GET with limit</a>
            <a href="#user-country">GET from country</a>
            <a href="#user-create">POST create new</a>
            <a href="#user-update">PUT update user</a>
            <a href="#user-delete">DELETE user</a>
          </NavSection>
          <NavSection section="Posts">
            <a href="#get-posts">GET all</a>
            <a href="#post-id">GET by id</a>
            <a href="#post-limit">GET with limit</a>
            <a href="#post-userId">GET by user ID</a>
            <a href="#post-create">POST create new</a>
            <a href="#post-update">PUT update post</a>
            <a href="#post-delete">DELETE post</a>
          </NavSection>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
