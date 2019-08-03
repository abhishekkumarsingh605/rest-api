let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let toDoListRoute = require('./routes/todolist');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
    //rse.send('')
    next();
})
app.use(personRoute);
app.use(customerRoute);
app.use(toDoListRoute);
app.use(express.static('public'));

// Handling 404 error
app.use((req,res,next)=>{
    res.status(404).send('We think you are lost!!')
})

// Handling 500 error
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server is listning on ${PORT}`) );