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

const getTask = (req, res) => {
    res.send('Retrieving a single tasks');
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

const deleteTask = (req, res) =>{
    res.send('Deleting a tasks');
}

const updateTask = (req, res) =>{
    res.send('Updating a tasks');
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}