const pool = require('../lib/connect');

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask
}


async function createTask(task){
    const { title, description } = task;
    return new Promise((resolve, reject) =>{
        const query = 'INSERT INTO task(title, description) VALUES ($1 , $2) RETURNING id';
        pool.query(query, [title, description], (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve({ id: result.rows[0].id, ...task });
            }
        });
        // pool.end();
    });
}

async function getAllTasks(){
    return new Promise((resolve, reject) =>{
        const query = 'SELECT * from task';
        pool.query(query, (err, results) =>{
            if(err){
                reject(err)
            }else{
                resolve(results.rows);
            }
        });
        // pool.end();
    });
}

async function getTask(taskId){
    return new Promise((resolve, reject) => {
        const query = 'SELECT * from task where id = $1';
        pool.query(query,[taskId], (err, result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result.rows);
            }
        });
        // pool.end();
    });
}

async function deleteTask(taskId){
    return new Promise((resolve, reject) =>{
        const query = 'DELETE FROM task where id = $1';
        pool.query(query, [taskId], (err, result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result.rowCount);
            }
        });
        // pool.end();
    });
}

async function updateTask(taskId, task){
    const { title, description } = task;
    return new Promise((resolve, reject) => {
        const query = 'UPDATE task SET title = $1, description = $2 where id=$3';
        pool.query(query, [title, description, taskId], (err, result) =>{
            if(err){
                reject(err);
            }else{
                resolve(result.rowCount);
            }
        });
    });
}