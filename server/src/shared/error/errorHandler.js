import HttpError from './httpError';
import { INTERNAL_SERVER_ERROR } from 'http-status';

const DEFAULT_ERROR = new HttpError(INTERNAL_SERVER_ERROR, 'Something went wrong');

const errorHandler = (err, _req, res, _next) => {
  const error = err.status ? err : DEFAULT_ERROR;
  return res.status(error.status).json({ message: error.message });
};

export default errorHandler;
