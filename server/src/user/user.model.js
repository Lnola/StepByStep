import authTokens from '@/shared/constants/authTokens';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Model } from 'sequelize';

class User extends Model {
  static fields({ INTEGER, STRING, VIRTUAL }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: STRING,
        allowNull: true,
      },
      lastName: {
        type: STRING,
        allowNull: true,
      },
      fullName: {
        type: VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`.trim();
        },
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
      roleId: {
        type: INTEGER,
        allowNull: false,
      },
    };
  }

  get profile() {
    return {
      id: this.id,
      username: this.username,
      fullName: this.fullName,
      role: this.role,
    };
  }

  static associate({ Comment, Rating, Recipe, Role }) {
    this.hasMany(Comment, { foreignKey: { name: 'userId', field: 'userId' }, onDelete: 'cascade', hooks: true });
    this.hasMany(Rating, { foreignKey: { name: 'userId', field: 'userId' }, onDelete: 'cascade', hooks: true });
    this.hasMany(Recipe, { foreignKey: { name: 'userId', field: 'userId' }, onDelete: 'cascade', hooks: true });
    this.belongsTo(Role, { foreignKey: { name: 'roleId', field: 'roleId' } });
  }

  static scopes({ Role }) {
    return {
      defaultScope: {
        attributes: { exclude: ['password'] },
        include: [Role],
      },
      includeRole: {
        include: [Role],
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

  static hooks() {
    return {
      beforeCreate(user) {
        return user._hashPassword();
      },
    };
  }

  passwordCompare(password) {
    return bcrypt.compare(password, this.password);
  }

  async generateTokens() {
    const accessToken = this._generateToken(authTokens.type.ACCESS);
    const refreshToken = this._generateToken(authTokens.type.REFRESH);

    this.refreshToken = refreshToken;
    await this.save();

    return { accessToken, refreshToken };
  }

  async _hashPassword() {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  }

  _generateToken(tokenType) {
    const { id, username } = this;
    const payload = { id, username };
    const secret = authTokens.config[tokenType].secret;
    const options = {
      audience: authTokens.config[tokenType].audience,
      expiresIn: authTokens.config[tokenType].duration,
    };

    return jwt.sign(payload, secret, options);
  }
}

export default User;
