const { v4: uuidv4 } = require("uuid");
const db = require("../models");
const { Debate } = db;

// get a prop : filters = {},userId
async function getAllDebates() {
  // const { difficulty, maxCookingTime, search } = filters;

  const whereClause = {
    // ...(difficulty && { difficulty }),
    // ...(maxCookingTime && { cookingTime: { [Op.lte]: Number(maxCookingTime) } }),
  };

  //send a prop: { where: whereClause }
  let debates = await Debate.findAll({
    include: [
      {
        model: db.Argument,
        as: "arguments",
        attributes: ["id"], // Only get the id to count
      },
    ],
  });

  // Add arguments count to each debate
  const debatesWithCounts = debates.map((debate) => {
    const debateData = debate.toJSON();
    debateData.arguments_count = debateData.arguments
      ? debateData.arguments.length
      : 0;
    // Remove the arguments array to keep response clean
    delete debateData.arguments;
    return debateData;
  });

  return debatesWithCounts;
}

async function getDebateById(id) {
  const debate = await Debate.findAll({ where: { id } });

  if (debate.length === 0) return null;

  return debate[0].toJSON();
}

//send a prop: , userId
async function createDebate(data) {
  const newDebate = await Debate.create({
    ...data,
  });

  if (!newDebate) {
    throw new Error("Failed to create recipe");
  }

  return newDebate.toJSON();
}

//send a prop: , userId
async function updateDebate(id, data) {
  const debate = await Debate.findAll({ where: { id } });

  if (debate.length === 0) return null;

  // if (debate[0].userId !== userId) {
  //   throw new Error("You are not authorized to update this debate");
  // }

  const updated = await debate[0].update(data);

  return updated.toJSON();
}

//send a prop: , userId
async function deleteDebate(id) {
  const debate = await Debate.findAll({ where: { id } });

  if (debate.length === 0) return null;

  // if (debate[0].userId !== userId) {
  //   throw new Error("You are not authorized to delete this debate");
  // }

  await debate[0].destroy();

  return true;
}

async function registerUserToDebate(debateId, userId) {
  const debate = await Debate.findByPk(debateId);

  if (!debate) {
    return { success: false, message: "Debate not found" };
  }

  // Check if user is already registered
  if (debate.user1_id === userId || debate.user2_id === userId) {
    return {
      success: false,
      message: "User already registered to this debate",
    };
  }

  // Check if debate is already full
  if (debate.user1_id && debate.user2_id) {
    return { success: false, message: "Debate is already full" };
  }

  // Check if debate is not in scheduled status
  if (debate.status !== "scheduled") {
    return {
      success: false,
      message: "Cannot register to a debate that is not scheduled",
    };
  }

  // Register user to the debate
  if (!debate.user1_id) {
    debate.user1_id = userId;
  } else if (!debate.user2_id) {
    debate.user2_id = userId;
  }

  // If both users are now registered, change status to live
  if (debate.user1_id && debate.user2_id) {
    debate.status = "live";
    debate.start_time = new Date(); // Set actual start time
  }

  await debate.save();

  return {
    success: true,
    message:
      debate.status === "live"
        ? "User registered and debate is now live!"
        : "User registered successfully",
    debate: debate.toJSON(),
  };
}

async function finishDebate(debateId, finalScores = {}) {
  const debate = await Debate.findByPk(debateId);

  if (!debate) {
    return { success: false, message: "Debate not found" };
  }

  // Check if debate is in live status
  if (debate.status !== "live") {
    return {
      success: false,
      message: "Can only finish debates that are currently live",
    };
  }

  // Update debate status and end time
  debate.status = "finished";
  debate.end_time = new Date();

  // Update scores if provided
  if (finalScores.score_user1 !== undefined) {
    debate.score_user1 = finalScores.score_user1;
  }
  if (finalScores.score_user2 !== undefined) {
    debate.score_user2 = finalScores.score_user2;
  }

  await debate.save();

  return {
    success: true,
    message: "Debate finished successfully",
    debate: debate.toJSON(),
  };
}

async function getStats() {
  const debates = await Debate.findAll();

  const debatesJSON = debates.map((d) => d.toJSON());

  const totalNumOfDebates = debatesJSON.length;
  // const averageCookingTime = (debatesJSON.reduce((sum, r) => sum + r.cookingTime, 0) / (totalNumOfRecipes || 1)).toFixed(2);

  // const debatesByDifficulty = debatesJSON.reduce((acc, r) => {
  //   const level = r.difficulty.toLowerCase();
  //   acc[level] = (acc[level] || 0) + 1;
  //   return acc;
  // }, {});

  // const ingredientCount = {};
  // debatesJSON.forEach(r => r.ingredients.forEach(ing => ingredientCount[ing] = (ingredientCount[ing] || 0) + 1));
  // const mostCommonIngredients = Object.entries(ingredientCount).sort((a,b) => b[1]-a[1]).map(e => e[0]);

  //send a prop: averageCookingTime, recipesByDifficulty, mostCommonIngredients
  return { totalNumOfDebates };
}

module.exports = {
  getAllDebates,
  getDebateById,
  createDebate,
  updateDebate,
  deleteDebate,
  registerUserToDebate,
  finishDebate,
  getStats,
};
