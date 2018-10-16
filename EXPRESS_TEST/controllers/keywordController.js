const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/keyword');

// =>localhost:3000/keywords/
router.get('/',(req,res)=>{
    Employee.find((err, docs)=>{
        if(!err){ res.send(docs); }
        else{console.log('Error in Retriving Keyword : ' + JSON.stringify(err, undefined, 2));}
    });
});
// this is for get all keywords

router.get('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{console.log('Error in Retriving Keyword : ' + JSON.stringify(err, undefined, 2));}
    });
        
});
// this is for get keywords by using id


router.post('/', (req, res) => {
    var emp = new Employee({        
        position: req.body.position,                
    });

    emp.save((err, doc) => {
        if(!err){ res.send(doc); }
        else{console.log('Error in Keyword Save : ' + JSON.stringify(err, undefined, 2));}
    });

});
// this is to post data to db


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var emp = {            
            position: req.body.position,                        
        };
          
        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err,doc) => {
            if(!err){ res.send(doc); }
            else{console.log('Error in Keyword Update : ' + JSON.stringify(err, undefined, 2));}
        });
});
// this is for update using id


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){ res.send(doc); }
        else{console.log('Error in Employee Delete : ' + JSON.stringify(err, undefined, 2));}
    });    
});
// this is for delete by using id


module.exports = router;










