const taskServices = require('../services/tasks.services');

const getAllTasks = async (req, res) =>{
    try {
        const tasks = await taskServices.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message});
        // next(error);
    }
}

async function getTask(req, res){
    try {
        const { taskId } = req.params;
        const task = await taskServices.getTask(taskId);
        if(task.length===0) res.status(404).json({ msg: "Task not found"});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message});
        // next(error);
    }
}

async function createTask(req, res){
    try {
        const task = req.body;
        const result = await taskServices.createTask(task);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message});
        // next(error);
    }
}

async function deleteTask(req, res){
    try {
        const { taskId } = req.params;
        const deleteRows = await taskServices.deleteTask(taskId);
        if(deleteRows){
            res.status(200).json({ msg: "Task deleted"});
        }else{
            res.status(404).json({ msg: "Task not found"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

async function updateTask(req, res){
    try {
        const { taskId } = req.params;
        const task = req.body;
        const updateRows = await taskServices.updateTask(taskId, task);
        if(updateRows){
            res.status(200).json({ msg: "Task updated"});
        }else{
            res.status(404).json({ msg: "Task not found"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}