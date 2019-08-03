let ToDoSchema = require('../models/todolist.model');
let express = require('express');
let router = express.Router();

//Create Customer
// post request localhost:3000/customer
router.post('/todo', (req,res)=>{
    //res.body
    if(!req.body){
        return res.status(400).send('request body is missing');
    }
   
    let model = new ToDoSchema(req.body);
    model.save()
        .then(doc =>{
            if(!doc || doc.length === 0){
                res.status(500).send(doc);
            }
            res.status(201).send(doc);
        })
        .catch(err =>{
            res.status(500).json(err);
        })

});

//Get all the records in the collection 
router.get('/todo/all',(req, res) => {
    ToDoSchema.find({}, function(err,data){
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
    
// Update request
router.put('/todo',(req, res) => {
    if(!req.query.taskname){
        return res.status(400).send('Missing query params: taskname')
    }
    ToDoSchema.findOneAndUpdate({
        taskname: req.query.taskname
    },req.body,{
        new : true
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//Delete Request
router.delete('/todo',(req, res) => {
    if(!req.query.email){
        return res.status(400).send('Missing query params: email')
    }
    ToDoSchema.findOneAndRemove({
        taskname: req.query.taskname
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;