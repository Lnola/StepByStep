import { Model } from 'sequelize';

class Role extends Model {
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

  static associate({ User }) {
    this.hasMany(User, { foreignKey: { name: 'roleId', field: 'roleId' } });
  }

  static dbOptions() {
    return {
      modelName: 'role',
      tableName: 'roles',
      timestamps: false,
    };
  }
}

export default Role;
