const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "username",
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comment",
    freezeTableName: true,
  }
);

module.exports = Comment;
