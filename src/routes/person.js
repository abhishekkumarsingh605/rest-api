let express = require('express');
let router = express.Router();

//QueryString => query property on request object
//localhost:3000/person?name=abhishek&age=20
router.get('/person',(req,res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`);    
    } else{
        res.send('You have requested a person');
    }
});


router.get('/person/error',(req,res) => {
    // throw new Error('This is a forced Error');
    res.status(500).sendFile('../public/500.html');
});

// param object on request objects
//localhost:3000/person/abhishek
router.get('/person/:name',(req,res) => {
    res.send(`You have requested a person ${req.params.name}`);
});

module.exports = router;