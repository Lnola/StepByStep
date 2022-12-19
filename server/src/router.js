import recipes from './recipe/index';
import { Router } from 'express';
import user from './user/index';

const router = Router();
router.use(user.path, user.router);
router.use(recipes.path, recipes.router);

export default router;
