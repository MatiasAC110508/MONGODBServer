require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to the DB
connectDB();

// Middlewares
app.use(cors()); // Allows the frontend to communicate with the backend
app.use(express.json()); // Allows receiving JSON in the requests

// Test root
app.get('/', (req, res) => {
    res.send('Express/MongoDB Review Server running!');
});

const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => {
    console.log(`Running server at http://localhost:${PORT}`); 
});

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);
