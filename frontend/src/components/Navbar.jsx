import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { AddRounded } from "@mui/icons-material";

export default function Navbar(){
    const history = useNavigate();
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography variant="h5" sx={{flexGrow: 1}}>
                            <Link to="/"> 
                                To do list
                            </Link>
                        </Typography>
                        <Button variant="contained" color="success" onClick={() => history("tasks/new")}>
                            <AddRounded/>
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}