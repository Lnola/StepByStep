import { NOT_FOUND, OK } from 'http-status';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { Recipe } from '@/shared/database/index';

const listPublishedRecipes = async (_req, res, next) => {
  try {
    const recipes = await Recipe.scope(['defaultScope', 'published']).findAll();
    return res.status(OK).json(recipes);
  } catch (err) {
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const listUserRecipes = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const recipes = await Recipe.findAll({ where: { userId } });
    return res.status(OK).json(recipes);
  } catch (err) {
    console.log(err);
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(OK).json({ recipeId: recipe.id });
  } catch (err) {
    // TODO: catch more specific error
    return next(new Error());
  }
};

export { listPublishedRecipes, listUserRecipes, createRecipe };
