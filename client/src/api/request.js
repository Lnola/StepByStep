import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { logout } from '@/stores/auth';

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
      logout();
    }

    throw err;
  },
);

export default request;
