const express = require("express");
const isAuth = require("../middlewares/isAuth.middleware");

const {
  getAllUsers,
  register,
  login,
  checkSession,
} = require("../controllers/users.controllers");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/checksession", [isAuth], checkSession); //! CHECK-SESSION
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
