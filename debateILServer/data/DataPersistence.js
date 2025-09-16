const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../data/recipes.json');

async function readRecipes() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading recipes file:', err.message);
    return [];
  }
}

async function writeRecipes(recipes) {
  try {
    await fs.writeFile(filePath, JSON.stringify(recipes, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing recipes file:', err.message);
    throw new Error('Failed to save recipes');
  }
}

module.exports = { readRecipes, writeRecipes };
