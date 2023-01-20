import { create, fetchByRecipe } from './comment.controller';
import { Router } from 'express';

const router = Router();
const path = '/comments';

router.get('/recipe/:recipeId', fetchByRecipe).post('/', create);

export default { path, router };
