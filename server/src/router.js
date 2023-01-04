import { Router } from 'express';

import stepIngredient from './stepIngredient/index';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(stepIngredient.path, stepIngredient.router);

export default router;
