import { Category } from '@/shared/database/index';
import { OK } from 'http-status';

const list = async (req, res, next) => {
  const categories = await Category.findAll();
  return res.status(OK).json(categories);
};

export { list };
