const { getAllUsers } = require("../models2/userModel");
const Auth = require("../models2/userModel");
require("dotenv").config();

async function getUsers(req, res, next) {
  try {
    const users = await getAllUsers();
    if (!users || users.length === 0) return [];
    res.status(200).json({ success: true, users });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await Auth.loginUser(email, password);
    if (!result) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000, // 24h
      path: "/",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: result.user,
      token: result.token, // Send token in response
    });
  } catch (err) {
    next(err);
  }
}

async function register(req, res, next) {
  try {
    const { username, email, password, firstName, lastName, gender } = req.body;
    if (!username || !email || !password || !firstName || !lastName)
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });

    const result = await Auth.registerUser({
      username,
      email,
      password,
      firstName,
      lastName,
      gender: gender || "male", // Default to male if not provided
    });
    if (!result)
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      ...result,
    });
  } catch (err) {
    next(err);
  }
}

async function profile(req, res, next) {
  try {
    const user = await Auth.profileUser(req.user.id);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
}

async function getUserById(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await Auth.profileUser(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
}

async function updateProfile(req, res, next) {
  try {
    const { firstName, lastName, email, username } = req.body;
    const userId = req.user.id;

    // Validate required fields
    if (!firstName || !email) {
      return res.status(400).json({
        success: false,
        message: "First name and email are required",
      });
    }

    const result = await Auth.updateUser(userId, {
      firstName,
      lastName,
      email,
      username,
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: result.user,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
  login,
  register,
  profile,
  getUserById,
  updateProfile,
};
