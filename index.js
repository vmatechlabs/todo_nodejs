const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const modules = require('./src/router');

const db = require('./src/model');
const { job } = require('./jobs/cronJobs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/v1/api', modules);
app.get('/v1/api', (req, res) => {
  res.status(200).json({ message: 'Welcome to Todo web app' });
});
app.use('*', (req, res) => {
  res.status(200).send({ message: 'Invalid Api Endpoints' });
});

const PORT =  5010;

job.start()

db.sequelize
  .sync({ force: false, alter: true })
  .then(() => {
    console.log('DB Synced');
  })
  .catch((err) => {
    console.log('Failed to Sync DB : ', err.message);
  });
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
