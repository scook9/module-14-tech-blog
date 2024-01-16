const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class User extends Model {}

//need to add table columns still
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    freezeTableName: true,
  }
);

module.exports = Users;
