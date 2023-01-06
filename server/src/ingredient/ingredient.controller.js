import { Ingredient } from '@/shared/database/index';

const getIngredients = async (_, res) => {
  const ingredients = await Ingredient.findAll();

  return res.json(ingredients);
};

module.exports = getIngredients;
