const express = require("express");
const debateRoute = express.Router();
const { validation, validationPut } = require("../middlewares/validation");
const debateController = require("../controllers/debateController");
const argumentController = require("../controllers/argumentController");
const voteController = require("../controllers/voteController");
const authMiddleware = require("../middlewares/authentication");
const checkRecipeOwnership = require("../middlewares/recipeOwnership");

// send in prep: authMiddleware for all of the functions
// send a prop : checkRecipeOwnership for put and delete

debateRoute.get("/", debateController.getDebates);
debateRoute.get("/stats", debateController.getStats);
debateRoute.get("/:id", debateController.getDebate);

debateRoute.post("/", validation, debateController.createDebate);
debateRoute.put("/:id", debateController.updateDebate);
debateRoute.delete("/:id", debateController.deleteDebate);

debateRoute.post("/:id/arguments", authMiddleware, argumentController.createArgument);
debateRoute.get("/:id/arguments", argumentController.getArguments);

debateRoute.patch("/:id/vote/user1", voteController.voteUser1);
debateRoute.patch("/:id/vote/user2", voteController.voteUser2);
debateRoute.get("/:id/votes", voteController.getVotes);

module.exports = debateRoute;
