import { Model } from 'sequelize';

class Comment extends Model {
  static fields({ INTEGER, TEXT, DATE }) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DATE,
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
    this.belongsTo(User);
    this.belongsTo(Recipe);
  }

  static dbOptions() {
    return {
      modelName: 'comment',
      tableName: 'comments',
      timestamps: false,
    };
  }
}

export default Comment;
