const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connectToDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Connected to MongoDB');
    })
}

module.exports = connectToDB;