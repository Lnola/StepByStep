import { create, fetchByUser, fetchPublished, remove } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router.get('/published', fetchPublished).get('/user', fetchByUser).post('/', create).delete('/:id', remove);

export default { path, router };
