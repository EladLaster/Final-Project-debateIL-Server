const express = require("express");
const debateRoute = express.Router();
const {
  validation,
  validationPut,
  validateDebateCreate,
  validateDebateUpdate,
  validateArgumentCreate,
  validateVoteCreate,
} = require("../middlewares/validation");
const debateController = require("../controllers/debateController");
const argumentController = require("../controllers/argumentController");
const voteController = require("../controllers/voteController");
const authMiddleware = require("../middlewares/authentication");

// send in prep: authMiddleware for all of the functions
// send a prop : checkRecipeOwnership for put and delete

// Public endpoints (no authentication required)
debateRoute.get("/public", debateController.getPublicDebates);
debateRoute.get("/stats", debateController.getStats);

// Authenticated endpoints
debateRoute.get("/", authMiddleware, debateController.getDebates);

// Arguments routes (must come before /:id routes)
debateRoute.get(
  "/arguments",
  authMiddleware,
  argumentController.getAllArguments
);
debateRoute.delete(
  "/arguments/:argumentId",
  authMiddleware,
  argumentController.deleteArgument
);

debateRoute.get("/:id", debateController.getDebate);
debateRoute.post("/", validateDebateCreate, debateController.createDebate);
debateRoute.put("/:id", validateDebateUpdate, debateController.updateDebate);
debateRoute.delete("/:id", authMiddleware, debateController.deleteDebate);
debateRoute.post(
  "/:id/register",
  authMiddleware,
  debateController.registerUserToDebate
);
debateRoute.post("/:id/finish", authMiddleware, debateController.finishDebate);

debateRoute.post(
  "/:id/arguments",
  authMiddleware,
  validateArgumentCreate,
  argumentController.createArgument
);
debateRoute.get("/:id/arguments", argumentController.getArguments);

debateRoute.patch("/:id/vote/user1", voteController.voteUser1);
debateRoute.patch("/:id/vote/user2", voteController.voteUser2);
debateRoute.get("/:id/votes", voteController.getVotes);

module.exports = debateRoute;
