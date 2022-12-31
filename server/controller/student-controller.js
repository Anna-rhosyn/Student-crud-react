
import Student from "../schema/stu-schema.js";

export const addStudent=async (req,res)=>{
    const student=req.body;

    const newStudent=new Student(student);

    try{
      await newStudent.save();
      res.status(201).json(newStudent);
    }catch(error){
       res.status(409).json({message:error.message});
    }
}

export const getStudent=async(req,res)=>{
  try{
  const student= await Student.find({});
  res.status(200).json(student);
  }catch(error){
    res.status(404).json({message:error.message});
  }
}

export const getstudent=async(req,res)=>{
  try{
    // const student= await Student.find({_id:req.params.id});
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
    }catch(error){
      res.status(404).json({message:error.message});
    }
}

export const editStudent=async(req,res)=>{
  let student=req.body;
  const editStudent=new Student(student);
  try{
      await Student.updateOne({_id:req.params.id},editStudent);
      res.status(201).json(editStudent);
  }catch(error){
    res.status(409).json({message:error.message});
  }
}

export const delStudent=async(req,res)=>{
   try{
      await Student.deleteOne({_id:req.params.id});
      res.status(200).json({message: 'student details deleted successfully'});
   }catch(error){
    res.status(409).json({message:error.message});
   }
}