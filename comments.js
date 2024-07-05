// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route with a callback function
// This function will be called when the browser requests the route
app.get('/', (req, res) => {
  // Send the response
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Run the server with node
// $ node comments.js
// Open browser at http://localhost:3000