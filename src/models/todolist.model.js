let mongoose = require('mongoose');
const user = "rest_api_user_01";
const password = "YfItECi4f0wLiDjA";

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-vduab.mongodb.net/todolist?retryWrites=true&w=majority`,()=>{
    useNewUrlParser: true
});

let ToDoSchema = new mongoose.Schema({
    taskname: String,
    description: String,
    date: String
})

module.exports = mongoose.model('todolist', ToDoSchema);