// This file is only for prod
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`)
})

app.use((req, res, next) => {
	if (req.hostname === 'dev.shpfrnt.net') {
		res.redirect(301, 'https://www.shpfrnt.net${req.originalUrl}');
	}
	else{
		next();
	}
});