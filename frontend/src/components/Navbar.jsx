import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export default function Navbar(){
    const history = useNavigate();
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            <Link to="/" style={{color:"#eee"}}> 
                                PERN
                            </Link>
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => history("tasks/new")}>
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}