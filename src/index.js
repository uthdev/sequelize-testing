const express = require('express');
const sequelize = require('./models-self/index')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  await sequelize.sync();
  await app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
  });
})();

// app.listen(PORT, () => console.log(`Sequelize testing app started on port ${PORT}...`));

module.exports = app;
