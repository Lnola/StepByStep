import { login, logout, register } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.post('/login', login).post('/register', register).post('/logout', logout);

export default { router, path };
