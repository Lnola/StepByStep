import { Model } from 'sequelize';

class User extends Model {
  static fields({ INTEGER, STRING }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: STRING,
        allowNull: false,
      },
      refreshToken: {
        type: STRING,
        allowNull: true,
      },
    };
  }

  get profile() {
    return {
      id: this.id,
      username: this.username,
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
