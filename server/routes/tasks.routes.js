const { Router } = require('express');
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/task.controller.');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:taskId', getTask);

router.post('/tasks', createTask);

router.delete('/tasks/:taskId', deleteTask);

router.put('/tasks/:taskId', updateTask);

module.exports = router;