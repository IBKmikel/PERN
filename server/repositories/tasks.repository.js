const pool = require('../lib/connect');

module.exports = {
    createTask,
    getAllTasks
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
        pool.end();
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
        pool.end();
    });
}