import { DataTypes, Sequelize } from 'sequelize';
import { forEach, invoke } from 'lodash';

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
  addScopes(model);
});

function addHooks(model, models) {
  const hooks = invoke(model, 'hooks', models);
  forEach(hooks, (hook, type) => model.addHook(type, hook));
}

function addScopes(model) {
  const scopes = invoke(model, 'scopes', models);
  forEach(scopes, (scope, name) => model.addScope(name, scope, { override: true }));
}

const { Message, RecommendedRoom, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag } = models;
export { Message, RecommendedRoom, Room, RoomTag, Tag, User, UserRoomInteraction, UserTag };

export default sequelize;
