// Import express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the home page with group names
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the CRUD page
app.get('/crud', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'crud.html'));
});

// Serve the JSON data page
app.get('/fruits', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fruits.html'));
});

// Include routes from other files after middleware setup
require('./file2')(app);  // Ensure that file2.js exports a function that accepts 'app'
require('./file3')(app);  // Ensure that file3.js exports a function that accepts 'app'

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
