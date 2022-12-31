import axios from 'axios';

const URL='http://localhost:8000';

export const addStudent=async (data)=>{
  try{
   return await axios.post(`${URL}/add`, data);
  }catch(error){
     console.log('Error while calling add User Api',error);
  }
}

export const getStudent = async()=>{
  try{
    return  await axios.get(`${URL}/all`);
  }catch(error){
      console.log('Error while calling Api',error);
  }
  
}

export const getstudent= async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
      console.log('Error while getStudent calling api',error);
    }
}

export const editStudent=async(student,id)=>{
   try{
      return await axios.put(`${URL}/${id}`,student);
   }catch(error){
     console.log('Error while calling editStudent api',error);
   }
}

export const delStudent=async(id)=>{
   try{
       return await axios.delete(`${URL}/${id}`);
   }catch(error){
      console.log('Error while calling delStudent api',error);
   }
}