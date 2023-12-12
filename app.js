// Import the express library
const express = require('express');
const path = require('path');

// Create a new express application
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});