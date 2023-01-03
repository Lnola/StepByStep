import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { OK } from 'http-status';
import { Recipe } from '@/shared/database/index';

const listPublishedRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        isPublished: true,
      },
    });
    return res.status(OK).json(recipes);
  } catch (err) {
    return next(new HttpError(404, errorMessages.NOT_FOUND_ERROR));
  }
};

export { listPublishedRecipes };
