import recipe from './recipe/index';
import { Router } from 'express';
import user from './user/index';

const router = Router();

router.use(user.path, user.router);
router.use(recipe.path, recipe.router);

export default router;
