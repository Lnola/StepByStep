import { Model } from 'sequelize';

class StepIngredient extends Model {
  static fields({ INTEGER }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      unitOfMeasurementId: {
        type: INTEGER,
        allowNull: false,
      },
      ingredientId: {
        type: INTEGER,
        allowNull: false,
      },
      stepId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static associate({ UnitOfMeasurement, Ingredient, Step }) {
    this.belongsTo(UnitOfMeasurement);
    this.belongsTo(Ingredient);
    this.belongsTo(Step);
  }

  static dbOptions() {
    return {
      modelName: 'stepIngredient',
      tableName: 'step_ingredients',
      timestamps: false,
    };
  }
}

export default StepIngredient;
