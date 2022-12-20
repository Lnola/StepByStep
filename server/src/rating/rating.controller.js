import { OK } from 'http-status';
import { Rating } from '@/shared/database/index';

const ratings = async (req, res, next) => {
  const result = await Rating.findAll();
  return res.status(OK).json(result);
};

export { ratings };
