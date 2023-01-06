import { Router } from 'express';

// eslint-disable-next-line sort-imports
import category from './category/index';
import ingredient from './ingredient/index';
import recipe from './recipe/index';
import step from './step/index';
import stepIngredient from './stepIngredient/index';
import unitOfMeasurement from './unitOfMeasurement/index';
import user from './user/index';

const router = Router();

router.use(category.path, category.router);
router.use(ingredient.path, ingredient.router);
router.use(recipe.path, recipe.router);
router.use(step.path, step.router);
router.use(stepIngredient.path, stepIngredient.router);
router.use(unitOfMeasurement.path, unitOfMeasurement.router);
router.use(user.path, user.router);

export default router;
