import { Model } from 'sequelize';

class Step extends Model {
  static fields({ INTEGER, TEXT, TIME }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: TEXT,
        allowNull: false,
      },
      time: {
        type: TIME,
        allowNull: false,
      },
      orderNumber: {
        type: INTEGER,
        allowNull: false,
      },
      recipeId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static associate({ StepIngredient, Recipe }) {
    this.hasMany(StepIngredient, { foreignKey: { name: 'stepId', field: 'stepId' } });
    this.belongsTo(Recipe, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
  }

  static dbOptions() {
    return {
      modelName: 'step',
      tableName: 'steps',
      timestamps: false,
    };
  }
}

export default Step;
