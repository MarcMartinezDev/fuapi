import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { requestValidator } from "../middlewares/validators.js";

const userRouter = Router();

userRouter.get("/v1/users", requestValidator, UserController.getUsers);
userRouter.get("/v1/users/:id", requestValidator, UserController.getUserById);
userRouter.post("/v1/create-user", requestValidator, UserController.createUser);
userRouter.put(
  "/v1/update-user/:id",
  requestValidator,
  UserController.updateUser
);
userRouter.delete(
  "/v1/delete-user/:id",
  requestValidator,
  UserController.deleteUser
);

export default userRouter;
