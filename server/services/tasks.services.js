const taskRepository = require('../repositories/tasks.repository');

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask
}

async function createTask(task){
    return await taskRepository.createTask(task);
}

async function getAllTasks(){
    return await taskRepository.getAllTasks();
}

async function getTask(taskId){
    return await taskRepository.getTask(taskId);
}

async function deleteTask(taskId){
    return await taskRepository.deleteTask(taskId);
}

async function updateTask(taskId, task){
    return await taskRepository.updateTask(taskId, task);
}