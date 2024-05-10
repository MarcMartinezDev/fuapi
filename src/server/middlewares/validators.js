import { isValid } from "../libs/functions.js";

export const requestValidator = async (req, res, next) => {
  const { id } = req.params;
  const { user, limit } = req.query;

  if (id) {
    if (!isValid(id)) return res.status(404).json({ message: "ID not found" });
  }
  if (user) {
    if (!isValid(user))
      return res.status(404).json({ message: "User ID not found" });
  }
  if (limit) {
    if (!isValid(limit))
      return res.status(400).json({ message: "Limit must be a number" });
  }
  next();
};
