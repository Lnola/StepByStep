import { Model } from 'sequelize';

class UnitOfMeasurement extends Model {
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
      abbreviation: {
        type: STRING,
        allowNull: true,
      },
    };
  }

  static associate({ StepIngredient }) {
    this.hasMany(StepIngredient, { foreignKey: { name: 'unitOfMeasurementId', field: 'unitOfMeasurementId' } });
  }

  static dbOptions() {
    return {
      modelName: 'unitOfMeasurement',
      tableName: 'units_of_measurement',
      timestamps: false,
    };
  }
}

export default UnitOfMeasurement;
