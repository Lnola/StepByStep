import { create } from './step.controller';
import { Router } from 'express';

const router = Router();
const path = '/steps';

router.post('/', create);

export default { router, path };
