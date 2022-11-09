import authTokens from '@/shared/constants/authTokens';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
