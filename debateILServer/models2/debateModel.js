const { v4: uuidv4 } = require('uuid');
const db = require('../models');
const { Debate } = db;

// get a prop : filters = {},userId
async function getAllDebates() {
  // const { difficulty, maxCookingTime, search } = filters;

  const whereClause = {
    // ...(difficulty && { difficulty }),
    // ...(maxCookingTime && { cookingTime: { [Op.lte]: Number(maxCookingTime) } }),
  };

  //send a prop: { where: whereClause }
  let debates = await Debate.findAll();

  // if (difficulty) {
  //   filteredRecipes = filteredRecipes.filter(
  //     r => r.difficulty.toLowerCase() === difficulty.toLowerCase()
  //   );
  // }

  // if (maxCookingTime) {
  //   const maxTime = parseInt(maxCookingTime, 10);
  //   if (!isNaN(maxTime)) {
  //     filteredRecipes = filteredRecipes.filter(r => r.cookingTime <= maxTime);
  //   }
  // }

  // if (search) {
  //   const searchLower = search.toLowerCase();
  //   filteredRecipes = filteredRecipes.filter(
  //     r =>
  //       r.title.toLowerCase().includes(searchLower) ||
  //       r.description.toLowerCase().includes(searchLower)
  //   );
  // }

  return debates;
}

async function getDebateById(id) {

  const debate = await Debate.findAll({where:{id}});

  if (debate.length === 0)
    return null;

  return debate[0].toJSON();
}

//send a prop: , userId
async function createDebate(data) {

  const newDebate= await Debate.create({
  ...data
});

  if (!newDebate) {
    throw new Error("Failed to create recipe");
  }

  return newDebate.toJSON();
}

//send a prop: , userId
async function updateDebate(id, data) {

  const debate = await Debate.findAll({where : {id}});

  if (debate.length === 0)
     return null;

  // if (debate[0].userId !== userId) {
  //   throw new Error("You are not authorized to update this debate");
  // }

  const updated = await debate[0].update(data);

  return updated.toJSON();
}

//send a prop: , userId
async function deleteDebate(id) {

  const debate = await Debate.findAll({where:{id}});

  if(debate.length === 0)
     return null;

  // if (debate[0].userId !== userId) {
  //   throw new Error("You are not authorized to delete this debate");
  // }

  await debate[0].destroy();

  return true;
}

async function getStats() {

  const debates = await Debate.findAll();

   const debatesJSON = debates.map(d =>d.toJSON());

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
  return {totalNumOfDebates};
}

module.exports = {
  getAllDebates,
  getDebateById,
  createDebate,
  updateDebate,
  deleteDebate,
  getStats
};
