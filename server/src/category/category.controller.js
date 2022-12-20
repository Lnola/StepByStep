import { Category } from '@/shared/database/index';
import { OK } from 'http-status';

const list = async (req, res, next) => {
  const result = await Category.findAll();
  return res.status(OK).json(result);
};

export { list };
