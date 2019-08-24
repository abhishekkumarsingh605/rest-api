let mongoose = require('mongoose');
const user = "rest_api_user_01";
const password = "YfItECi4f0wLiDjA";

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-vduab.mongodb.net/test?retryWrites=true&w=majority`

,()=>{useNewUrlParser:true});

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);