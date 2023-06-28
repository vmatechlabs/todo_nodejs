const db = require('../src/model');

const CronJob = require('cron').CronJob;
var i = 0
const job = new CronJob('* * * * *', async (req, res) => {
  try {
    console.log('Running todo cron job...');
    const newTodo = {
      todo: `cron job todo ${i}`,
      description: `Cron job description ${i}`
    };
    i++;
    const createdTodo = await db.todo.create(newTodo);

    if (createdTodo) {
      console.log('Todo created successfully:', createdTodo.toJSON());
    } else {
      console.error('Todo not created');
    }
  } catch (error) {
    console.error('Error executing cron job:', error);
  }
});
module.exports = {job};