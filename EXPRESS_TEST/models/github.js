// THIS ONE IS DEVELOPED FOR SOME MAINTENANCE PURPOSE

const mongoose = require('mongoose');

var Github = mongoose.model('Github', {
    position: { type:String },    
});

module.exports = {Github} ; 
