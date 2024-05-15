import Post from "../models/post.model.js";
import { createNewId } from "../libs/functions.js";

class PostController {
  async getPosts(req, res) {
    const { limit } = req.query;
    const { user } = req.query;

    try {
      if (user) {
        const posts = await Post.find({ userId: user })
          .limit(limit)
          .select("-_id");

        if (posts.length < 1)
          return res.status(404).json({ message: "Posts not found" });
        else return res.status(200).json(posts);
      }
      const posts = await Post.find({}).limit(limit).select("-_id");

      if (posts === null)
        return res.status(404).json({ message: "Posts not found" });

      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
    }
  }
  async getPostById(req, res) {
    const { id } = req.params;

    try {
      const post = await Post.findOne({ id }).select("-_id");
      if (post === null)
        return res.status(404).json({ message: "Post not found" });

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async cratePost(req, res) {
    const { title, description, userId } = req.body;
    try {
      const newId = await createNewId(Post);
      const post = {
        id: newId,
        title,
        description,
        userId,
      };
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async updatePost(req, res) {
    const { id } = req.params;
    const { title, description, userId } = req.body;

    try {
      const post = await Post.findOne({ id: parsedId });
      if (post === null)
        return res.status(404).json({ message: "Post not found" });
      const modifiedPost = {
        id: post.id,
        title: title || post.title,
        description: description || post.description,
        userId: userId || post.userId,
      };
      res.status(200).json(modifiedPost);
    } catch (error) {
      console.log(error);
    }
  }
  async deletePost(req, res) {
    const { id } = req.params;

    try {
      const post = await Post.findOne({ id });
      if (post === null)
        return res.status(404).json({ message: "Post not found" });
      res.status(200).json({ message: "Post deleted", id: post.id });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new PostController();
