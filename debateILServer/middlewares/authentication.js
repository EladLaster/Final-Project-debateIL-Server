const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  // Get token from cookies or Authorization header
  let token = req.cookies?.token;

  // If no cookie token, try Authorization header
  if (!token && req.headers.authorization) {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7);
    }
  }

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
