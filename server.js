const express = require('express');
const app = express();
const path = require('path');

// inporting the full name data 
const data = require('./number2');

//printing full name data
app.get('/data', data.name);

// serving the resume page and contact form
app.use(express.static(path.join(__dirname, 'resume')));



// listening to server
app.listen(3000, ()=> {
	console.log(`app is working on port 3000`);
});