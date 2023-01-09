import { createStep } from './step.controller';
import { Router } from 'express';

const router = Router();
const path = '/steps';

router.post('/', createStep);

export default { path, router };
