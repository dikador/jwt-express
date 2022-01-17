const { Sequelize } = require('sequelize');

module.exports = new Sequelize('express', 'admin', '2341', {
   host: 'localhost',
   port: 5432,
   dialect: 'postgres'
});
