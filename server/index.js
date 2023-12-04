const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const pool = require('./lib/connect');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
const PORT = config.portServer;

// Global middlewares

// Routes
app.use(morgan('dev'));
app.use(express.json());
app.use(tasksRoutes);

// Error middlewares

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    pool;
});
