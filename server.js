const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, 'resume')));


// listening to server
app.listen(3000, ()=> {
	console.log(`app is working on port 3000`);
});