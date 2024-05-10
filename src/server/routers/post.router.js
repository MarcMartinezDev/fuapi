import { requestValidator } from "../middlewares/validators.js";
import { Router } from "express";
import PostController from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get(
  "/v1/posts",
  requestValidator,
  PostController.getPosts
);
postRouter.get(
  "/v1/posts/:id",
  requestValidator,
  PostController.getPostById
);
postRouter.post(
  "/v1/create-post",
  requestValidator,
  PostController.cratePost
);
postRouter.put(
  "/v1/update-post/:id",
  requestValidator,
  PostController.updatePost
);
postRouter.delete(
  "/v1/delete-post/:id",
  requestValidator,
  PostController.deletePost
);

export default postRouter;
