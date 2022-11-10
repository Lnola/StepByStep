import { Model } from 'sequelize';

class Recipe extends Model {
  static fields({ INTEGER, STRING, TEXT, DATE, BOOLEAN }) {
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
    };
  }

  static associate({ Comment, Rating, User, Category }) {
    this.hasMany(Comment, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.hasMany(Rating, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.belongsTo(User, { foreignKey: { name: 'userId', field: 'userId' } });
    this.belongsTo(Category, { foreignKey: { name: 'categoryId', field: 'categoryId' } });
  }

  static scopes({ Category }) {
    return {
      defaultScope: {
        include: [Category],
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
