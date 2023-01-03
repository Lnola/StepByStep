import { listPublishedRecipes } from './recipe.controller';
import { Router } from 'express';

const router = Router();
const path = '/recipes';
router.get('/published', listPublishedRecipes);

export default { router, path };
