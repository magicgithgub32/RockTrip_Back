const User = require("../models/users.model");
const { verifyToken } = require("../../utils/jwt");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(new Error("Unauthorized ⛔️"));
    }

    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);

    const userLogged = await User.findById(validToken.id);

    userLogged.password = null;
    req.user = userLogged;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuth;
