import { clearAuthCookies, setAuthCookies } from '@/shared/helpers/auth';
import { CONFLICT, CREATED, OK, UNAUTHORIZED } from 'http-status';
import { Role, User } from '@/shared/database/index';
import errorMessages from '@/shared/constants/errorMessages';
import HttpError from '@/shared/error/httpError';
import { UniqueConstraintError } from 'sequelize';

const login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.scope('includeRole').findOne({ where: { username } });
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
    const role = await Role.findOne({ where: { name: 'user' } });
    const user = await User.create({ ...body, roleId: role.id });

    const tokens = await user.generateTokens();
    setAuthCookies(tokens, res);

    return res.status(CREATED).json({ ...user.profile, role });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      return next(new HttpError(CONFLICT, errorMessages.REGISTER_ERROR));
    }
    return next(new Error());
  }
};

const logout = async (_, res) => {
  clearAuthCookies(res);
  res.status(OK).send();
};

export { login, register, logout };
