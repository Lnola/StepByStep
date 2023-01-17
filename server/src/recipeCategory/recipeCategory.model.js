import { Model } from 'sequelize';

class RecipeCategory extends Model {
  static fields({ INTEGER }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      recipeId: {
        type: INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static associate({ Recipe, Category }) {
    this.belongsTo(Recipe, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
    this.belongsTo(Category, { foreignKey: { name: 'categoryId', field: 'categoryId' } });
  }

  static dbOptions() {
    return {
      modelName: 'recipeCategory',
      tableName: 'recipe_categories',
      timestamps: false,
    };
  }
}

export default RecipeCategory;
