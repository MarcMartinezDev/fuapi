import { createNewId } from "../libs/functions.js";
import User from "../models/user.model.js";

class UserController {
  async getUsers(req, res) {
    const { limit } = req.query;
    const { country } = req.query;

    try {
      if (country) {
        const users = await User.find({ "direction.country": country })
          .select("-_id")
          .limit(limit);
        if (users.length < 1)
          return res.status(404).json({ message: "No data found" });
        else res.json(users);
      } else {
        const users = await User.find().select("-_id").limit(limit);
        if (users.length < 1)
          return res.status(404).json({ message: "No data found" });
        res.json(users);
      }
    } catch (error) {
      res.status(500);
    }
  }
  async getUserById(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findOne({ id }).select("-_id").sort("desc");
      if (user === null)
        return res.status(404).json({ message: "User not found" });
      else res.status(200).json(user);
    } catch (error) {
      res.status(500);
    }
  }
  async createUser(req, res) {
    const newId = await createNewId(User);
    const user = {
      id: newId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
      direction: {
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
        geolocation: {
          lat: req.body.lat,
          lon: req.body.lon,
        },
      },
      image: req.body.image,
    };
    res.status(200).json({ user });
  }
  async updateUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findOne({ id: id });
      if (user === null)
        return res.status(404).json({ message: "User not found" });

      const modifiedUser = {
        id: req.body.id || user.id,
        firstname: req.body.firstname || user.firstname,
        lastname: req.body.lastname || user.lastname,
        username: req.body.username || user.username,
        password: req.body.password || user.password,
        age: req.body.age || user.age,
        email: req.body.email || user.email,
        phone: req.body.phone || user.phone,
        direction: {
          address: req.body.address || user.direction.address,
          city: req.body.city || user.direction.city,
          state: req.body.state || user.direction.state,
          zip: req.body.zip || user.direction.zip,
          country: req.body.country || user.direction.country,
          geolocation: {
            lat: req.body.lat || user.direction.geolocation.lat,
            lon: req.body.lon || user.direction.geolocation.lon,
          },
        },
        image: req.body.image || user.image,
      };
      res.status(200).json({ user: modifiedUser });
    } catch (error) {
      res.status(500);
    }
  }
  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findOne({ id }).select("-_id");
      if (user === null)
        return res.status(404).json({ message: "User not found" });
      res.status(200).json({ message: "User deleted", id: user.id });
    } catch (error) {
      res.status(500);
    }
  }
}

export default new UserController();
