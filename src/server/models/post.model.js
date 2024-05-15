import mongoose from "mongoose";
import User from "./user.model.js";

const postSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.Number,
    ref: User,
    required: true,
  },
});

const Post = mongoose.model("posts", postSchema);

export default Post;
