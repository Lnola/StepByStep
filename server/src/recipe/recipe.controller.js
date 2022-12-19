import { OK } from 'http-status';
import { Recipe } from '@/shared/database/index';
console.log('log0');
const list = async (req, res, next) => {
  console.log('log1');
  const recipes = await Recipe.findAll();
  console.log('log2');
  return res.status(OK).json(recipes);
};

export { list };
