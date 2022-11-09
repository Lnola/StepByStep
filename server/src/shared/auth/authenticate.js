import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import Audience from './audience';
import errorMessages from 'shared/constants/errorMessages';
import { FORBIDDEN } from 'http-status';
import HttpError from 'shared/error/httpError';
import { User } from 'shared/database';

const authenticate = async (req, _res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
  }

  try {
    const { id, aud } = jwtVerify(accessToken, process.env.ACCESS_TOKEN_SECRET || '');
    if (aud !== Audience.Scope.Access) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }

    const user = await User.findByPk(id);
    if (!user) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }

    req.user = user;

    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) return next();

    if (err instanceof JsonWebTokenError) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }
  }
};

export default authenticate;
