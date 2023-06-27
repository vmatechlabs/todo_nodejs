const dbConfig = require('../config/db.json');
const Sequelize = require('sequelize');

let dbDetails =
  'postgres://' +
  dbConfig.development.username +
  ':' +
  dbConfig.development.password +
  '@' +
  dbConfig.development.host +
  ':' +
  dbConfig.development.port +
  '/' +
  dbConfig.development.database;

const sequelize = new Sequelize(dbDetails, {
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.todo = require('./todo.model')(sequelize, Sequelize);


module.exports = db;
