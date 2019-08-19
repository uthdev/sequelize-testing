const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.SEQUELIZE_TEST_DB;
const sequelize = new Sequelize(connectionString)

const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch(error) {
    console.error('Unable to connect to the database:', err)
  }
}

// connectionTest();



  module.exports = sequelize;