const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/keyword',(err)=>{    
    // connection with database
    if(!err)
        console.log('MongoDB connection succeeded.....');
        // if connection establish success print this
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        // if connection establish error print this
});
module.exports = mongoose;