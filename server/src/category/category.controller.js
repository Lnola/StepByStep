import { Category } from '@/shared/database/index';
import { OK } from 'http-status';

const list = async (_req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(OK).json(categories);
  } catch (err) {
    return next(new Error());
  }
};

export { list };
