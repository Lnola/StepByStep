import { getIngredients } from './ingredient.controller';
import { Router } from 'express';

const router = Router();
const path = '/ingredients';

router.get('/', getIngredients);

export default { router, path };
