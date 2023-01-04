import { newRecipe } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';

router.post('', newRecipe);

module.exports = { router, path };
