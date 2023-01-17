import { Ingredient } from '@/shared/database/index';

const fetchAll = async (_, res) => {
  const ingredients = await Ingredient.findAll();
  return res.json(ingredients);
};

export { fetchAll };
