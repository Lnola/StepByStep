import { NOT_FOUND, OK } from 'http-status';
import { Comment } from '@/shared/database/index';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';

const fetchByRecipe = async (req, res, next) => {
  const { recipeId } = req.params;
  try {
    const comments = await Comment.findAll({ where: { recipeId } });
    return res.status(OK).json(comments);
  } catch (err) {
    if (err instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const create = async (req, res, next) => {
  try {
    const { text, recipeId } = req.body;
    const userId = req.user.id;
    const newComment = { text, recipeId, userId, createdAt: new Date() };
    await Comment.create(newComment);
    return res.status(OK);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchByRecipe, create };
