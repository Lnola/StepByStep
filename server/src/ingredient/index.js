import getIngredients from './ingredient.controller';
import { Router } from 'express';

const router = Router();
const path = '/ingredients';

router.get('', getIngredients);

module.exports = { router, path };
