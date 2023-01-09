import { createRecipe, deleteRecipe, listPublishedRecipes, listUserRecipes } from './recipe.controller';

import { Router } from 'express';

const router = Router();
const path = '/recipes';
router
  .post('/delete', deleteRecipe)
  .get('/published', listPublishedRecipes)
  .get('/userRecipes', listUserRecipes)
  .post('/', createRecipe);

export default { path, router };
