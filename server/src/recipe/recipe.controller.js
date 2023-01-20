import { NOT_FOUND, OK } from 'http-status';
import { Recipe, Step, StepIngredient } from '@/shared/database/index';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';

const fetchPublished = async (_req, res, next) => {
  try {
    const recipes = await Recipe.scope(['defaultScope', 'published']).findAll();
    return res.status(OK).json(recipes);
  } catch (err) {
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const fetchByUser = async (req, res, next) => {
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

const create = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(OK).json({ recipeId: recipe.id });
  } catch (err) {
    return next(new Error());
  }
};

const updateIsPublished = async (req, res, next) => {
  const { isPublished } = req.body;
  const { id } = req.params;

  try {
    await Recipe.update({ isPublished: !isPublished }, { where: { id } });
    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findByPk(id);
    if (!recipe) return new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR);
    await recipe.destroy();
    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

const fetchById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findByPk(id);
    if (!recipe) return new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR);
    return res.status(OK).json(recipe);
  } catch (err) {
    next(new Error());
  }
};

const fetchStepsByRecipeId = async (req, res, next) => {
  const { id } = req.params;
  const recipeId = id;
  try {
    const steps = await Step.findAll({
      include: [
        {
          model: StepIngredient,
        },
      ],
      where: { recipeId },
      order: ['orderNumber'],
    });
    return res.status(OK).json(steps);
  } catch (err) {
    console.log(err);
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

export { fetchPublished, fetchByUser, create, updateIsPublished, remove, fetchById, fetchStepsByRecipeId };
