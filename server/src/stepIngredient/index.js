import { newStepIngredient } from './stepIngredient.controller';
import { Router } from 'express';

const router = Router();
const path = '/step-ingredients';

router.post('', newStepIngredient);

module.exports = { router, path };
