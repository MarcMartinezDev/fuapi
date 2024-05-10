import { fileURLToPath } from "url";
import postRouter from "./routers/post.router.js";
import userRouter from "./routers/user.router.js";
import cors from "cors";
import express from "express";
import path from "path";

/** app config */
const app = express();
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.resolve(path.dirname(__filename), "../");

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/dist")));
app.use(cors());

/** use routers */
app.use("/api", [userRouter, postRouter]);

/** static routes */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "/index.html"));
});

export default app;
