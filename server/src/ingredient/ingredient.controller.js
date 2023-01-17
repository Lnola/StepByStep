import { Ingredient } from '@/shared/database/index';
import { OK } from 'http-status';

const fetchAll = async (_req, res, next) => {
  try {
    const ingredients = await Ingredient.findAll();
    return res.status(OK).json(ingredients);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchAll };
