const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const { User } = db;
const JWT_SECRET = process.env.JWT_SECRET;

// Generate avatar URL based on gender
async function generateAvatarUrl(gender = "male") {
  try {
    const genderParam = gender === "female" ? "female" : "male";
    const response = await fetch(
      `https://randomuser.me/api/?gender=${genderParam}`
    );
    const data = await response.json();
    return data.results[0].picture.medium;
  } catch (error) {
    // Fallback to gender-appropriate default avatar
    const fallbackId = Math.floor(Math.random() * 100) + 1;
    const fallbackGender = gender === "female" ? "women" : "men";
    return `https://randomuser.me/api/portraits/${fallbackGender}/${fallbackId}.jpg`;
  }
}

async function getAllUsers() {
  const users = await User.findAll();

  let usersJSON = users.map((u) => u.toJSON());

  return usersJSON;
}

async function loginUser(email, password) {
  const user = await User.findOne({ where: { email: email.toLowerCase() } });
  if (!user) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "24h",
  });

  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      avatarUrl: user.avatarUrl,
    },
    token,
  };
}

async function registerUser({
  username,
  email,
  password,
  firstName,
  lastName,
  gender = "male",
}) {
  const existing = await User.findOne({
    where: { email: email.toLowerCase() },
  });
  if (existing) return null;

  const hashedPassword = await bcrypt.hash(password, 10);

  // Generate avatar URL based on gender
  const avatarUrl = await generateAvatarUrl(gender);

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password: hashedPassword,
    firstName,
    lastName,
    gender,
    avatarUrl,
  });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "24h",
  });

  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      avatarUrl: user.avatarUrl,
    },
    token,
  };
}

async function profileUser(userId) {
  const user = await User.findByPk(userId);
  if (!user) return null;

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    avatarUrl: user.avatarUrl,
    createdAt: user.createdAt,
  };
}

async function updateUser(userId, updateData) {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Check if email is being changed and if it's already taken
    if (updateData.email && updateData.email !== user.email) {
      const existingUser = await User.findOne({
        where: { email: updateData.email },
      });
      if (existingUser) {
        return { success: false, message: "Email already exists" };
      }
    }

    // Check if username is being changed and if it's already taken
    if (updateData.username && updateData.username !== user.username) {
      const existingUser = await User.findOne({
        where: { username: updateData.username },
      });
      if (existingUser) {
        return { success: false, message: "Username already exists" };
      }
    }

    // Update user data
    await user.update(updateData);

    return {
      success: true,
      message: "User updated successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt,
      },
    };
  } catch (error) {
    return { success: false, message: "Failed to update user" };
  }
}

module.exports = {
  getAllUsers,
  loginUser,
  registerUser,
  profileUser,
  updateUser,
};
