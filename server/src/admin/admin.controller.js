import { FORBIDDEN, NOT_FOUND, OK } from 'http-status';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { User } from '@/shared/database/index';

const allUsers = async (req, res, next) => {
  const isAdmin = req.user.role.name;
  try {
    if (isAdmin === 'admin') {
      const users = await User.findAll();
      return res.status(OK).json(users);
    } else {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }
  } catch (error) {
    if (error instanceof DatabaseError) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    return next(new Error());
  }
};

const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  const isAdmin = req.user.role.name;
  try {
    if (isAdmin === 'admin') {
      const user = await User.findByPk(userId);
      if (!user) return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
      await user.destroy();
      return res.sendStatus(OK);
    } else {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }
  } catch (error) {
    return next(new Error());
  }
};

export { allUsers, deleteUser };
