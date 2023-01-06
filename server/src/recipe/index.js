import { listPublishedRecipes, listUserRecipes } from './recipe.controller';

import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/published', listPublishedRecipes).get('/userRecipes', listUserRecipes);

export default { router, path };
