const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authentication");
const {
  validateUserRegister,
  validateUserLogin,
  validateUserUpdate,
} = require("../middlewares/validation");

userRoute.get("/users", userController.getUsers);
userRoute.get("/users/:userId", userController.getUserById);
userRoute.get("/:userId", userController.getUserById);
userRoute.post("/register", validateUserRegister, userController.register);
userRoute.post("/login", validateUserLogin, userController.login);
userRoute.get("/profile", authMiddleware, userController.profile);
userRoute.put(
  "/profile",
  authMiddleware,
  validateUserUpdate,
  userController.updateProfile
);

module.exports = userRoute;
