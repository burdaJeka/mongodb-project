//burdaJeka
//mongoDB26618
//mongodb+srv://burdaJeka:mongoDB26618@cluster0.jd8et.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const DB_HOST = "mongodb+srv://burdaJeka:mongoDB26618@cluster0.jd8et.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
