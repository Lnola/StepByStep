import { create, deleteRecipe, fetchByUser, fetchPublished } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router.get('/published', fetchPublished).get('/user', fetchByUser).post('/', create).delete('/delete', deleteRecipe);

export default { path, router };
