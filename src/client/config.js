export const routes = {
  home: "/",
  docs: "/docs",
};

export const USER_ARTICLES = [
  {
    id: "get-users",
    title: "GET all users",
    description: "Returns all users from the database.",
    fecth: "users",
    method: "GET",
  },
  {
    id: "user-id",
    title: "GET user by id",
    description: "Returns the user that corresponds to the {id}<number>.",
    fecth: "users/{id}",
    method: "GET",
  },
  {
    id: "user-limit",
    title: "GET users with limit",
    description:
      "Returns all users. {limit}<number> indicates the limit of users returned.",
    fecth: "users?limit={limit}",
    method: "GET",
  },
  {
    id: "user-country",
    title: "GET users from country",
    description: "Returns all users filtered by {country}.",
    fecth: "users?country={country}",
    method: "GET",
  },
  {
    id: "user-create",
    title: "POST create user",
    description:
      "Create a new user and returns it (not saved in the database).",
    fecth: "create-user",
    method: "POST",
    additional:
      "Remember that the new user is not actually saved in the database. So if you want to access the new id you will get a 404 error.",
  },
  {
    id: "user-update",
    title: "PUT update user",
    description:
      "Updates user by {id}<number> and returns it (not saved in the database).",
    fecth: "update-user/{id}",
    method: "PUT",
    additional:
      "Remember that the updated user is not actually saved in the database. So if you want to access the new id you will get a 404 error.",
  },
  {
    id: "user-delete",
    title: "DELETE delete user",
    description: "Delete user by {id}<number> (not saved in the database).",
    fecth: "delete-user/{id}",
    method: "DELETE",
    additional:
      "Remember that the deleted user is not actually saved in the database.",
  },
];

export const POST_ARTICLES = [
  {
    id: "get-posts",
    title: "GET all posts",
    description: "Returns all posts from the database.",
    fetch: "posts",
    method: "GET",
  },
  {
    id: "post-id",
    title: "GET post by id",
    description: "Returns the post that corresponds to the {id}<number>.",
    fetch: "posts/{id}",
    method: "GET",
  },
  {
    id: "post-limit",
    title: "GET posts with limit",
    description:
      "Returns all posts. {limit}<number> indicates the limit of posts returned.",
    fetch: "posts?limit={limit}",
    method: "GET",
  },
  {
    id: "post-userId",
    title: "GET posts by user ID",
    description: "Returns all posts from the user {userId}<number>.",
    fetch: "posts?user={userId}",
    method: "GET",
  },
  {
    id: "post-create",
    title: "POST create post",
    description:
      "Create a new post and returns it (not saved in the database).",
    fetch: "create-post",
    method: "POST",
    additional:
      "Remember that the new user is not actually saved in the database. So if you want to access the new id you will get a 404 error.",
  },
  {
    id: "post-update",
    title: "PUT update post",
    description:
      "Updates post by {id}<number> and returns it (not saved in the database).",
    fetch: "update-post/{id}",
    method: "PUT",
    additional:
      "Remember that the updated user is not actually saved in the database. So if you want to access the new id you will get a 404 error.",
  },
  {
    id: "post-delete",
    title: "DELETE delete post",
    description: "Delete post by {id}<number> (not saved in the database).",
    fetch: "delete-post/{id}",
    method: "DELETE",
    additional:
      "Remember that the deleted post is not actually saved in the database.",
  },
];
