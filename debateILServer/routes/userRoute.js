const express = require("express");
const userRoute = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authentication");

userRoute.get("/users", userController.getUsers);
userRoute.get("/users/:userId", userController.getUserById);
userRoute.get("/:userId", userController.getUserById);
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.get("/profile", authMiddleware, userController.profile);
userRoute.put("/profile", authMiddleware, userController.updateProfile);

module.exports = userRoute;
