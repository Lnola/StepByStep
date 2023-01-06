import { createStepIngredient } from './stepIngredient.controller';
import { Router } from 'express';

const router = Router();
const path = '/step-ingredients';

router.post('/', createStepIngredient);

export { router, path };
