//require the library
const mongoose=require('mongoose');
//connect to the database
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://nikhil09dixit:nishu@cluster0.v5jzcdf.mongodb.net/?retryWrites=true&w=majority");
//acquire the connection (to check if it is successful)
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});
module.exports=db;