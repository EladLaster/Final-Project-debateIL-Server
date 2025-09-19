const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { User } = db;
const JWT_SECRET = process.env.JWT_SECRET;

async function  getAllUsers() {
  const users = await User.findAll();
  
  let usersJSON = users.map(u => u.toJSON());

  return usersJSON;
}

async function loginUser(email, password) {
  const user = await User.findOne({ where: { email: email.toLowerCase() } });
  if (!user) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });

  // console.log(JWT_SECRET);
  
  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }
  };
}

async function registerUser({ username, email, password, firstName, lastName }) {
  const existing = await User.findOne({ where: { email: email.toLowerCase() } });
  if (existing) return null;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email: email.toLowerCase(),
    password: hashedPassword,
    firstName,
    lastName
  });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });

  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
    token
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
    lastName: user.lastName
  };
}


module.exports = { getAllUsers,loginUser, registerUser , profileUser};
