import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskList(){
    const [tasks, setTasks] = useState([]);

    const history = useNavigate();

    const loadTasks = async() =>{
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        
        setTasks(data);
    }

    const handleDelete = async(id)=>{
        try {
            await fetch(`http://localhost:3000/tasks/${id}`, {
                method: "DELETE",
            });

            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        loadTasks()
    }, []);

    return(
        <>
            <h1>Task List</h1>
            {
                tasks.map((task) => (
                    <Card key={task.id} 
                        style={{
                        marginBottom: '.7rem',
                        backgroundColor: '#1e272e'
                    }}>
                        <CardContent style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{color: "white"}}>
                                <Typography>{task.title}</Typography>
                                <Typography>{task.description}</Typography>
                            </div>
                            <div>
                                <Button variant="contained" color="inherit" onClick={() => history(`/tasks/${task.id}/edit`)}>
                                    Edit
                                </Button>
                                <Button variant="contained" color='warning' onClick={() => handleDelete(task.id)} style={{marginLeft: '.5rem'}}>
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    );
}