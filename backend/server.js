const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON data in requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Test Route
app.get('/Dashboard', (req, res) => {
  res.send('Welcome to the Scheme Impact Predictor Backend!');
});

// API route for sending data to Flask server
app.post('/api/predict', async (req, res) => {
  try {
    const userInput = req.body; // Data sent from the front-end

    // Log the incoming data for debugging
    console.log("Received data from frontend:", userInput);

    // Send POST request to the Flask server (running at 127.0.0.1:5002)
    const flaskResponse = await axios.post('http://127.0.0.1:5002/predict', userInput, {
      headers: { 'Content-Type': 'application/json' }, // Ensure correct content type
    });

    // Log the response from Flask for debugging
    console.log("Received response from Flask:", flaskResponse.data);

    // Send back the response from Flask to the front-end
    res.json(flaskResponse.data);
  } catch (error) {
    console.error('Error communicating with Flask server:', error.message);
    // Send a more descriptive error to the client
    res.status(500).json({ error: 'Failed to fetch prediction from model server.', message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
