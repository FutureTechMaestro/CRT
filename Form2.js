const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware to parse application/json
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve the forms.html file on GET request
app.get('/forms.html', function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/forms.html");
});

// Handle POST request from React form submission for adding a book
app.get('/process_get', function(req, res) {
  const { title, authorFirstName, authorLastName, releasedYear, stockQuantity, pages } = req.body;
  console.log('Received book data:', req.body);

  // Here you can process the received data (e.g., save to database, etc.)
  // For now, just sending back a response with received data
  const response = {
    title:req.query.title,
    authorFirstName:req.query.authorFirstName,
    authorLastName:req.query.authorLastName,
    releasedYear:req.query.releasedYear,
    stockQuantity:req.query.stockQuantity,
    pages:req.query.pages
  };
  
  res.end(JSON.stringify(response));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
