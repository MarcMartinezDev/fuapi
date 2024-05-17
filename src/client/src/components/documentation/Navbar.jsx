import NavSection from "./NavSection";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex gap-5 flex-col">
      <div>
        <h3>About</h3>
        <a href="#overview">Overview</a>
      </div>
      <div className="flex flex-col">
        <h3>API Reference</h3>
        <div>
          <NavSection section="Users">
            <li>
              <a href="#get-users">GET all</a>
            </li>
            <li>
              <a href="#user-id">GET by id</a>
            </li>
            <li>
              <a href="#user-limit">GET with limit</a>
            </li>
            <li>
              <a href="#user-country">GET from country</a>
            </li>
            <li>
              <a href="#user-create">POST create new</a>
            </li>
            <li>
              <a href="#user-update">PUT update user</a>
            </li>
            <li>
              <a href="#user-delete">DELETE user</a>
            </li>
          </NavSection>
          <NavSection section="Posts">
            <li>
              <a href="#get-posts">GET all</a>
            </li>
            <li>
              <a href="#post-id">GET by id</a>
            </li>
            <li>
              <a href="#post-limit">GET with limit</a>
            </li>
            <li>
              <a href="#post-userId">GET by user ID</a>
            </li>
            <li>
              <a href="#post-create">POST create new</a>
            </li>
            <li>
              <a href="#post-update">PUT update post</a>
            </li>
            <li>
              <a href="#post-delete">DELETE post</a>
            </li>
          </NavSection>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
