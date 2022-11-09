import { OK, UNAUTHORIZED } from 'http-status';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { setAuthCookies } from '@/shared/helpers/auth';
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

export { login };
