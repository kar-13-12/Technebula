const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/NEET-PROJECT")
.then(() => {
    console.log("MongoDB in Connected");
})
.catch(()=> {
    console.log("DB not Connected");
})

const newSchema = new mongoose.Schema({
    name:String,
    email:String,
    location:String,
    message:String
})

const collection = mongoose.model("persondata", newSchema)
module.exports = collection