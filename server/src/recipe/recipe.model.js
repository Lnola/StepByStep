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
      userId: {
        type: INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: INTEGER,
        allowNull: false,
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
      },
    };
  }

  static associate({ Comment, Rating, User, Category, Step }) {
    this.hasMany(Comment, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.hasMany(Rating, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.hasMany(Step, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.belongsTo(User, { foreignKey: { name: 'userId', field: 'userId' } });
    this.belongsTo(Category, { foreignKey: { name: 'categoryId', field: 'categoryId' } });
  }

  static scopes({ Category, Rating, Step }) {
    return {
      defaultScope: {
        include: [Category, Rating, Step],
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
