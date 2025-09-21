const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  try {
  const token = req.cookies?.token;

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "No authentication cookie provided" });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid authentication cookie",
      error: error.message,
    });
  }
}

module.exports = authMiddleware;
