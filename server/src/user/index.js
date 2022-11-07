import { fetchById } from './user.controller';
import { Router } from 'express';

const router = Router();
const path = '/users';

router.get('/:id', fetchById);

export default { router, path };
