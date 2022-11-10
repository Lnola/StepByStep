import { Model } from 'sequelize';

class Ingredient extends Model {
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

  static associate({ StepIngredient }) {
    this.hasMany(StepIngredient, { foreignKey: { name: 'ingredientId', field: 'ingredientId' } });
  }

  static dbOptions() {
    return {
      modelName: 'ingredient',
      tableName: 'ingredients',
      timestamps: false,
    };
  }
}

export default Ingredient;
