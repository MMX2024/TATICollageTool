// Load Express
const express = require('express');
const path = require('path');

// Initialize Express App
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// API Route to generate a unique session link
app.get('/api/generate-link', (req, res) => {
    const baseUrl = 'https://your-vercel-app.vercel.app/collage/';  // Replace this with your Vercel URL later
    const uniqueId = Math.random().toString(36).substr(2, 9);  // Generate random unique ID
    const sessionLink = baseUrl + uniqueId;
    
    res.json({ link: sessionLink });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
