
import { useState } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled,Button } from "@mui/material";
import { addStudent } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container=styled(FormGroup)`
  width:50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top:20px;
  }
  
`
const defaultValue ={
    name:'',
    username:'',
    regnumber:'',
    email:''
}

const Addstudent=()=> {
 
 const [student,setStudent]=useState(defaultValue);

 const navigate=useNavigate();

 const onValueChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
 }

 const addDetails=async()=>{
  await addStudent(student);
  navigate('/all')
 }

  return (
    <Container>
        <Typography variant="h4">Add Student</Typography>
       <FormControl>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
         <InputLabel>Username</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="username"/>
        </FormControl>
        <FormControl>
         <InputLabel>RegisterNo</InputLabel>
         <Input  onChange={(e)=>onValueChange(e)} name="regnumber"/>
        </FormControl>
        <FormControl>
         <InputLabel>Email</InputLabel>
         <Input  onChange={(e)=>onValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
           <Button variant="contained" onClick={()=> addDetails()} >ADD STUDENT</Button> 
        </FormControl>  
    </Container>
  )
}

export default Addstudent;