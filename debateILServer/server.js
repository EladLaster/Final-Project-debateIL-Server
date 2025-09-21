require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const debateRoute = require("./routes/debateRoute");
const userRoute = require("./routes/userRoute");
const { errorHandling } = require("./middlewares/errorHandling");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // "http://localhost:5174",
      // "http://localhost:5175",
      "https://final-project-debateil-client.onrender.com",
    ],
    credentials: true,
  })
);

morgan.token("date", () => new Date().toISOString());
app.use(morgan(":method :url :status :response-time ms - :date"));

app.get("/", (req, res) => {res.send("Server is running!");});
app.use("/auth", userRoute);
app.use("/api/users", userRoute);
app.use("/api/debates", debateRoute);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
