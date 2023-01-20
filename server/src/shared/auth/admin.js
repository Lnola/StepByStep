import errorMessages from 'shared/constants/errorMessages';
import { FORBIDDEN } from 'http-status';
import HttpError from 'shared/error/httpError';

const admin = async (req, _res, next) => {
  if (req.user.role.name !== 'admin') return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
  return next();
};

export default admin;
