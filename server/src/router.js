import admin from './admin/index';
import authenticate from './shared/auth/authenticate';
import category from './category/index';
import comment from './comment/index';
import ingredient from './ingredient/index';
import rating from './rating/index';
import recipe from './recipe/index';
import refresh from './shared/auth/refresh';
import { Router } from 'express';
import step from './step/index';
import unitOfMeasurement from './unitOfMeasurement/index';
import user from './user/index';

const router = Router();

router
  .use(user.path, user.router)
  .use(authenticate)
  .use(refresh)
  .use(category.path, category.router)
  .use(comment.path, comment.router)
  .use(ingredient.path, ingredient.router)
  .use(rating.path, rating.router)
  .use(recipe.path, recipe.router)
  .use(step.path, step.router)
  .use(unitOfMeasurement.path, unitOfMeasurement.router)
  .use(admin.path, admin.router);

export default router;
