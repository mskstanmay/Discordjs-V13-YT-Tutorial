const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async()=>{
    await mongoose.connect("mongodb+srv://mskstanmay:JSBOT8527@myawsomebot.e5ifg.mongodb.net/main",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .catch(err=>console.error(err))
    return mongoose;
}