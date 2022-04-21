const DB_HOST = require('./config.js');
const mongoose = require('mongoose');
mongoose.connect(DB_HOST , {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection success !');
})
.catch((error) => {
    console.log(error.message);
})
