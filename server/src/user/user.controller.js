import { NOT_FOUND, OK } from 'http-status';
import HttpError from '@/shared/error/httpError';
import { User } from '@/shared/database/index';

const fetchById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return next(new HttpError(NOT_FOUND, "User doesn't exist"));

  return res.status(OK).json({ id: user.id });
};

export { fetchById };
