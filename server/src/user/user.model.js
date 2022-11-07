import { Model } from 'sequelize';

class User extends Model {
  static fields({ INTEGER, STRING }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      password: {
        type: STRING,
        allowNull: false,
      },
    };
  }

  static scopes() {
    return {
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'user',
      tableName: 'users',
      timestamps: false,
    };
  }
}

export default User;
