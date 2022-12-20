import { OK } from 'http-status';
import { Recipe } from '@/shared/database/index';

const list = async (req, res, next) => {
  const recipes = await Recipe.findAll();

  return res.status(OK).json(recipes);
};

export { list };
