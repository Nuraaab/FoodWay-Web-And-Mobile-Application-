const mongoose = require('mongoose');
const conlink = 'mongodb+srv://nurua:nuru1586@cluster0.yeyzxl0.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try{
  const conn = await mongoose.connect(conlink, 
    {
      useUnifiedTopology:true,
      useNewUrlParser:true
    });
  }catch(err){
    console.log(`Error is ${err}` )
  }
 
};

module.exports = connectDB;