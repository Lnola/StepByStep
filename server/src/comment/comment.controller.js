import { NOT_FOUND, OK } from 'http-status';
import { Comment } from '@/shared/database/index';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';

const fetchByRecipe = async (req, res, next) => {
  const recipeId = req.recipe.id;

  try {
    const comments = await Comment.findAll({ where: { recipeId } });

    return res.status(OK).json(comments);
  } catch (err) {
    if (err instanceof DatabaseError) {
      return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    }

    return next(new Error());
  }
};

const fetchByUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const comments = await Comment.findAll({ where: { userId } });

    return res.status(OK).json(comments);
  } catch (err) {
    console.log(err);

    if (err instanceof DatabaseError) {
      return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    }

    return next(new Error());
  }
};

const create = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);

    return res.status(OK).json({ commentId: comment.id });
  } catch (err) {
    return next(new Error());
  }
};

const updateIsPublished = async (req, res, next) => {
  const { isPublished } = req.body;
  const { id } = req.params;

  try {
    await Comment.update({ isPublished: !isPublished }, { where: { id } });

    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR);
    }

    await comment.destroy();
    return res.sendStatus(OK);
  } catch (err) {
    return next(new Error());
  }
};

export { fetchByRecipe, fetchByUser, create, updateIsPublished, remove };
