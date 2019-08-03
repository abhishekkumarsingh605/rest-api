let CustomerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

//Create Customer
// post request localhost:3000/customer
router.post('/customer', (req,res)=>{
    //res.body
    if(!req.body){
        return res.status(400).send('request body is missing');
    }
   
    let model = new CustomerModel(req.body);
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

//Get request
router.get('/customer',(req, res) => {
    if(!req.query.email){
        return res.status(400).send('Missing query params: email')
    }
    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
//Get all the records in the collection 
router.get('/customer/all',(req, res) => {
    CustomerModel.find({}, function(err,data){
        res.json(data);
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
    
// Update request
router.put('/customer',(req, res) => {
    if(!req.query.email){
        return res.status(400).send('Missing query params: email')
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
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
router.delete('/customer',(req, res) => {
    if(!req.query.email){
        return res.status(400).send('Missing query params: email')
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;