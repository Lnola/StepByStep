import { Model } from 'sequelize';

class Category extends Model {
  static fields({ INTEGER, STRING }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
    };
  }

  static associate({ Recipe, RecipeCategory }) {
    this.belongsToMany(Recipe, { through: RecipeCategory });
  }

  static dbOptions() {
    return {
      modelName: 'category',
      tableName: 'categories',
      timestamps: false,
    };
  }
}

export default Category;
