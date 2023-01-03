import { NOT_FOUND, OK } from 'http-status';

import { Category } from '@/shared/database/index';
import { DatabaseError } from 'sequelize';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';

const list = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(OK).json(categories);
  } catch (err) {
    if (err instanceof DatabaseError) {
      return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND_ERROR));
    } else {
      return next(new Error());
    }
  }
};

export { list };
