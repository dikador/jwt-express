const { DataTypes } = require('sequelize');
const sequelize = require('../db')

const Token = sequelize.define("tokens", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
   },
   user: {
      type: DataTypes.INTEGER,
      references: {
         model: 'users',
         key: 'id'
      }
   },
   refreshToken: {
      type: DataTypes.STRING,
   },
});

module.exports = Token;