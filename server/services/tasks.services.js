const taskRepository = require('../repositories/tasks.repository');

module.exports = {
    createTask,
    getAllTasks
}

async function createTask(task){
    return await taskRepository.createTask(task);
}

async function getAllTasks(){
    return await taskRepository.getAllTasks();
}