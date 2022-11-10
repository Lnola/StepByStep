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
        allowNull: false,
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

  static dbOptions() {
    return {
      modelName: 'recipe',
      tableName: 'recipes',
      timestamps: false,
    };
  }
}

export default Recipe;
