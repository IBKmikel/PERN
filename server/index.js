const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
const PORT = config.portServer;

// Global middlewares

// Routes
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(tasksRoutes);

// Error middlewares

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
