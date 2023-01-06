import { Recipe } from '@/shared/database/index';

const newRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.json({ recipeId: recipe.id });
  } catch (err) {
    // TODO: maybe catch more specific error
    next(new Error());
  }
};

module.exports = { newRecipe };
