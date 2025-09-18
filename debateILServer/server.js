require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

const express = require("express");
const morgan = require("morgan");
const { errorHandling } = require("./middlewares/errorHandling");
const debateRoute = require("./routes/debateRoute");
const userRoute = require("./routes/userRoute");
// const userFavoriteRoute = require("./routes/userFavoriteRoute");
const app = express();

app.use(express.json());
// הוסף את פורט 5174 ל-CORS
app.use(cors()); // מאפשר הכל - רק לפיתוח!

morgan.token("date", () => new Date().toISOString());
app.use(morgan(":method :url :status :response-time ms - :date"));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/auth", userRoute);
app.use("/api/users", userRoute);

// app.use('/api/users/favorites', userFavoriteRoute);

app.use("/api/debates", debateRoute);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
