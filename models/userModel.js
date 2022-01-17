const { DataTypes } = require('sequelize');
const sequelize = require('../db')

const User = sequelize.define('users', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
   },
   name: {
      type: DataTypes.STRING,
   },
   email: {
      type: DataTypes.STRING,
      unique: true,
   },
   password: {
      type: DataTypes.STRING,
   },
   isActivated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
   },
   activationCode:{
      type: DataTypes.STRING,
   }
}, {freezeTableName: true})


module.exports = User;