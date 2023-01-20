import { create, fetchByRecipe } from './rating.controller';
import { Router } from 'express';

const router = Router();
const path = '/ratings';

router.get('/recipe/:recipeId', fetchByRecipe).post('/', create);

export default { path, router };
