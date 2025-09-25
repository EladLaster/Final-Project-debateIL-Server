require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const debateRoute = require("./routes/debateRoute");
const userRoute = require("./routes/userRoute");
const { errorHandling } = require("./middlewares/errorHandling");
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "https://final-project-debateil-client.onrender.com",
      ];

      // Check if origin is allowed or is from render.com
      if (allowedOrigins.includes(origin) || origin.endsWith(".onrender.com")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "Origin",
      "X-Requested-With",
      "Accept",
      "Access-Control-Allow-Credentials",
    ],
    exposedHeaders: ["Set-Cookie"],
    optionsSuccessStatus: 200, // For legacy browser support
  })
);
app.use(cookieParser());

morgan.token("date", () => new Date().toISOString());
app.use(morgan(":method :url :status :response-time ms - :date"));

app.get("/", (req, res) => {res.send("Server is running!");});
app.use("/auth", userRoute);
app.use("/api/users", userRoute);
app.use("/api/debates", debateRoute);

// Serve built client (SPA) and enable refresh on deep links
const clientDistPath = path.join(__dirname, "../../Final-Project-debateIL-Client/debateILClient/dist");
app.use(express.static(clientDistPath));

// SPA fallback - must come AFTER API routes
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/auth")) return next();
  res.sendFile(path.join(clientDistPath, "index.html"));
});

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
