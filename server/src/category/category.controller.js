import { Category } from '@/shared/database/index';
import { OK } from 'http-status';

const fetchAll = async (_req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(OK).json(categories);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchAll };
