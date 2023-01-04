import ingredient from './ingredient/index';
import { Router } from 'express';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(ingredient.path, ingredient.router);

export default router;
