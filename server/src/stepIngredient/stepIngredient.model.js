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
    this.belongsTo(UnitOfMeasurement, { foreignKey: { name: 'unitOfMeasurementId', field: 'unitOfMeasurementId' } });
    this.belongsTo(Ingredient, { foreignKey: { name: 'ingredientId', field: 'ingredientId' } });
    this.belongsTo(Step, { foreignKey: { name: 'stepId', field: 'stepId' } });
  }

  static scopes({ Ingredient, UnitOfMeasurement }) {
    return {
      defaultScope: {
        include: [Ingredient, UnitOfMeasurement],
      },
    };
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
