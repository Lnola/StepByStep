import { CONFLICT, CREATED, OK, UNAUTHORIZED } from 'http-status';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { setAuthCookies } from '@/shared/helpers/auth';
import { UniqueConstraintError } from 'sequelize';
import { User } from '@/shared/database/index';

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.unscoped().findOne({ where: { username } });
  if (!user) return next(new HttpError(UNAUTHORIZED, errorMessages.SIGN_IN_ERROR));

  const isPasswordCorrect = await user.passwordCompare(password);
  if (!isPasswordCorrect) return next(new HttpError(UNAUTHORIZED, errorMessages.SIGN_IN_ERROR));

  const tokens = await user.generateTokens();
  setAuthCookies(tokens, res);

  return res.status(OK).json({ ...user.profile });
};

const register = async (req, res, next) => {
  const { body } = req;
  try {
    const user = await User.create(body);

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return res.status(CREATED).json({ ...user.profile });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return next(new HttpError(CONFLICT, errorMessages.REGISTER_ERROR));
    }
    return next(new Error());
  }
};

export { login, register };
