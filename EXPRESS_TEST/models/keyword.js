const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {    
    position: { type:String },
});
// get value from employee keyword
module.exports = {Employee} ; 