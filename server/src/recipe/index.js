import { create, fetchByUser, fetchPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router.get('/published', fetchPublished).get('/user', fetchByUser).post('/', create);

export default { router, path };
