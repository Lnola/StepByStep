import { OK } from 'http-status';
import { Rating } from '@/shared/database/index';

const create = async (req, res, next) => {
   try {
      const rating = await Rating.create(req.body);
      return res.status(OK).json({ rating: rating.id });
   } catch (err) {
      return next(new Error());
   }
};

export { create };