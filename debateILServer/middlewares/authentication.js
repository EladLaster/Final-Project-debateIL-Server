const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  console.log("Cookies:", req.cookies);
  console.log("Headers:", req.headers);
  console.log("Authorization:", req.headers.authorization);

  // Try to get token from Authorization header first, then from cookies
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.substring(7)
    : req.cookies?.token;

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "No Token provided" });

  try {
    console.log("JWT_SECRET:", JWT_SECRET);
    console.log("Token received:", token);

    const decoded = jwt.verify(token, JWT_SECRET);

    if (!decoded.id)
      return res
        .status(401)
        .json({ success: false, message: "Invalid token payload" });

    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verify error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid Token", error: error.message });
  }
}

module.exports = authMiddleware;
