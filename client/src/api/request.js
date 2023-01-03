import { StatusCodes } from 'http-status-codes';
import axios from 'axios';

const { FORBIDDEN } = StatusCodes;

const config = {
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
};

const request = axios.create(config);

const isAuthError = err => [FORBIDDEN].includes(err.response.status);

request.interceptors.response.use(
  res => res,
  err => {
    if (isAuthError(err)) {
      // add logout action
      console.log('user logout');
    }

    throw err;
  },
);

export default request;
