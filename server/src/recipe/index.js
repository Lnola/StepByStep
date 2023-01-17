import { create, deleteRecipe, fetchByUser, fetchPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router.post('/delete', deleteRecipe).get('/published', fetchPublished).get('/user', fetchByUser).post('/', create);

export default { path, router };
