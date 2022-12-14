import { Model } from 'sequelize';

class Rating extends Model {
  static fields({ INTEGER }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      value: {
        type: INTEGER,
        allowNull: false,
      },
      userId: {
        type: INTEGER,
        allowNull: false,
      },
      recipeId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  static associate({ User, Recipe }) {
    this.belongsTo(User, { foreignKey: { name: 'userId', field: 'userId' } });
    this.belongsTo(Recipe, { foreignKey: { name: 'recipeId', field: 'recipeId' } });
  }

  static dbOptions() {
    return {
      modelName: 'rating',
      tableName: 'ratings',
      timestamps: false,
    };
  }
}

export default Rating;
