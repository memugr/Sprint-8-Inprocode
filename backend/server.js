import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// CREATE - Create a new user
app.post('/users', (req, res) => {
    const { first_name, last_name, email, phone, location, hobby } = req.body;
    db.query('INSERT INTO users (first_name, last_name, email, phone, location, hobby) VALUES (?, ?, ?, ?, ?, ?)', 
    [first_name, last_name, email, phone, location, hobby], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User added successfully', id: result.insertId });
    });
});

// READ - Get all users
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// READ - Get a single user by ID
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'User not found' });
        res.json(result[0]);
    });
});

// UPDATE - Update a user
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, location, hobby } = req.body;
    db.query('UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, location = ?, hobby = ? WHERE id = ?', 
    [first_name, last_name, email, phone, location, hobby, id], 
    (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User updated successfully' });
    });
});

// DELETE - Remove a user
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User deleted successfully' });
    });
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
