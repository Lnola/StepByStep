import { JsonWebTokenError, verify as jwtVerify, TokenExpiredError } from 'jsonwebtoken';
import Audience from './audience';
import errorMessages from 'shared/constants/errorMessages';
import { FORBIDDEN } from 'http-status';
import HttpError from 'shared/error/httpError';
import { setAuthCookies } from 'shared/helpers/auth';
import { User } from 'shared/database';

const refresh = async (req, res, next) => {
  if (req.user) return next();

  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
  }

  try {
    const user = await User.findOne({ where: { refreshToken } });
    const { id, username, aud } = jwtVerify(refreshToken, process.env.REFRESH_TOKEN_SECRET || '');

    if (!user || id !== user.id || username !== user.username || aud !== Audience.Scope.Refresh) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }

    req.user = user;

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return next(new HttpError(FORBIDDEN, errorMessages.TOKEN_EXPIRED_ERROR));
    }

    if (err instanceof JsonWebTokenError) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN_ERROR));
    }
  }
};

export default refresh;
