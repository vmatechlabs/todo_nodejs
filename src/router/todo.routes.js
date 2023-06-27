const express = require('express');
const router = express.Router();

const todo = require('../controller/todo.controller');

router.post('/create', todo.createTodo )
router.get('/', todo.getTodo)
router.put('/update/:id', todo.updateTodo)
router.put('/delete/:id',todo.deleteTodo)

module.exports = router;