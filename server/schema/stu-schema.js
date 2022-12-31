import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const stuSchema=mongoose.Schema({
    name:String,
    username:String,
    regnumber:String,
    email:String
})
autoIncrement.initialize(mongoose.connection);
stuSchema.plugin(autoIncrement.plugin,'student');

const student=mongoose.model('student',stuSchema);

export default student;