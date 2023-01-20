import { NOT_FOUND, OK } from 'http-status';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { Rating } from '@/shared/database/index';

const fetchByRecipe = async (req, res, next) => {
  const { recipeId } = req.params;
  const userId = req.user.id;
  try {
    const rating = await Rating.findOne({ where: { recipeId, userId } });
    return res.status(OK).json(rating);
  } catch (err) {
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const create = async (req, res, next) => {
  try {
    const { value, recipeId } = req.body;
    const userId = req.user.id;
    const newRating = { value, recipeId, userId };
    await Rating.create(newRating);
    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchByRecipe, create };
