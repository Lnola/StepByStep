import { calculateAverage, sumTime } from '@/shared/helpers/helpers';

import { Model } from 'sequelize';

class Recipe extends Model {
  static fields({ INTEGER, STRING, TEXT, DATE, BOOLEAN, VIRTUAL }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      description: {
        type: TEXT,
        allowNull: false,
      },
      isPublished: {
        type: BOOLEAN,
        allowNull: false,
      },
      publishedAt: {
        type: DATE,
        allowNull: true,
      },
      createdAt: {
        type: DATE,
        allowNull: false,
      },
      imageUrl: {
        type: TEXT,
        allowNull: true,
      },
      avgRating: {
        type: VIRTUAL,
        get() {
          const { ratings } = this;
          if (!ratings) return null;
          const valueArray = ratings.map(({ dataValues: { value } }) => value);
          return calculateAverage(valueArray);
        },
      },
      preparationTime: {
        type: VIRTUAL,
        get() {
          const { steps } = this;
          if (!steps) return null;
          const timeArray = steps.map(({ dataValues: { time } }) => time);
          return sumTime(timeArray);
        },
        userId: {
          type: INTEGER,
          allowNull: false,
        },
      },
    };
  }

  static associate({ Comment, Rating, User, Category, RecipeCategory, Step }) {
    this.hasMany(Comment, { foreignKey: { name: 'recipeId', field: 'recipeId' }, onDelete: 'cascade', hooks: true });
    this.hasMany(Rating, { foreignKey: { name: 'recipeId', field: 'recipeId' }, onDelete: 'cascade', hooks: true });
    this.hasMany(Step, { foreignKey: { name: 'recipeId', field: 'recipeId' }, onDelete: 'cascade', hooks: true });
    this.hasMany(RecipeCategory, {
      foreignKey: { name: 'recipeId', field: 'recipeId' },
      onDelete: 'cascade',
      hooks: true,
    });
    this.belongsTo(User, { foreignKey: { name: 'userId', field: 'userId' } });
    this.belongsToMany(Category, { through: RecipeCategory });
  }

  static scopes({ Category, Rating, Step }) {
    return {
      defaultScope: {
        include: [Category, Rating, Step],
      },
      published: {
        where: { isPublished: true },
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'recipe',
      tableName: 'recipes',
      timestamps: false,
    };
  }
}

export default Recipe;
