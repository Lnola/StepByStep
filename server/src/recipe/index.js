import { createRecipe, listPublishedRecipes, listUserRecipes } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/published', listPublishedRecipes).get('/userRecipes', listUserRecipes).post('/', createRecipe);

export default { router, path };
