import { newStep } from './step.controller';
import { Router } from 'express';

const router = Router();
const path = '/steps';

router.post('/', newStep);

export { router, path };
