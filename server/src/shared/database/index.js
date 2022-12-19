import { DataTypes, Sequelize } from 'sequelize';
import { forEach, invoke } from 'lodash';

import CategoryModel from '@/category/category.model';
import CommentModel from '@/comment/comment.model';
import IngredientModel from '@/ingredient/ingredient.model';
import RatingModel from '@/rating/rating.model';
import RecipeModel from '@/recipe/recipe.model';
import RoleModel from '@/role/role.model';
import StepIngredientModel from '@/stepIngredient/stepIngredient.model';
import StepModel from '@/step/step.model';
import UnitOfMeasurementModel from '@/unitOfMeasurement/unitOfMeasurement.model';
import UserModel from '@/user/user.model';

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || ' ',
  process.env.POSTGRES_USER || ' ',
  process.env.POSTGRES_PASSWORD || ' ',
  {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
  },
);

const models = {
  Category: defineModel(CategoryModel),
  Comment: defineModel(CommentModel),
  Ingredient: defineModel(IngredientModel),
  Rating: defineModel(RatingModel),
  Recipe: defineModel(RecipeModel),
  Role: defineModel(RoleModel),
  StepIngredient: defineModel(StepIngredientModel),
  Step: defineModel(StepModel),
  UnitOfMeasurement: defineModel(UnitOfMeasurementModel),
  User: defineModel(UserModel),
};

function defineModel(Model) {
  const fields = invoke(Model, 'fields', DataTypes, sequelize) || {};
  const dbOptions = invoke(Model, 'dbOptions', sequelize) || {};
  Object.assign(dbOptions, { sequelize });
  return Model.init(fields, dbOptions);
}

forEach(models, model => {
  invoke(model, 'associate', models);
  addHooks(model, models);
  addScopes(model, models);
});

function addHooks(model, models) {
  const hooks = invoke(model, 'hooks', models);
  forEach(hooks, (hook, type) => model.addHook(type, hook));
}

function addScopes(model, models) {
  const scopes = invoke(model, 'scopes', models);
  forEach(scopes, (scope, name) => model.addScope(name, scope, { override: true }));
}

const { Category, Comment, Ingredient, Rating, Recipe, Role, StepIngredient, Step, UnitOfMeasurement, User } = models;
export { Category, Comment, Ingredient, Rating, Recipe, Role, StepIngredient, Step, UnitOfMeasurement, User };

export default sequelize;
