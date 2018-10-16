// THIS ONE IS USED FOR TESTING PURPOSES

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
const port = 3001;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});