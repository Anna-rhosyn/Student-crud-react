import mongoose from 'mongoose';

const Connection=async ()=>{
    const URL='mongodb://localhost:27017/crud-app';
  try{
   await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('database connected');  
}catch(error){
    console.log('Error connecting database',error);
  }
}

export default Connection;