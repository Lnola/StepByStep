import { Comment, User } from '@/shared/database/index';
import { NOT_FOUND, OK } from 'http-status';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';

const fetchAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(OK).json(users);
  } catch (error) {
    if (error instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const removeUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    await user.destroy();
    return res.sendStatus(OK);
  } catch (error) {
    return next(new Error());
  }
};

const removeComment = async (req, res, next) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.findByPk(commentId);
    if (!comment) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    await comment.destroy();
    return res.sendStatus(OK);
  } catch (error) {
    return next(new Error());
  }
};

export { removeComment, removeUser, fetchAllUsers };
