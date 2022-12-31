
import { useState,useEffect } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled,Button } from "@mui/material";
import { editStudent, getstudent } from "../service/api";
import { useNavigate,useParams } from "react-router-dom";

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

const Editstudent=()=> {
 
 const [student,setStudent]=useState(defaultValue);

 const navigate=useNavigate();
 const {id}= useParams();
 useEffect(()=>{
      loadStuDetails();
 },[])

 const loadStuDetails= async()=>{
    const res= await getstudent(id);
    setStudent(res.data);
 }

 const onValueChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
 }

 const editDetails=async()=>{
  await editStudent(student,id);
  navigate('/all')
 }

  return (
    <Container>
        <Typography variant="h4">Edit Student</Typography>
       <FormControl>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="name" value={student.name} />
        </FormControl>
        <FormControl>
         <InputLabel>Username</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="username" value={student.username}/>
        </FormControl>
        <FormControl>
         <InputLabel>RegisterNo</InputLabel>
         <Input  onChange={(e)=>onValueChange(e)} name="regnumber" value={student.regnumber}/>
        </FormControl>
        <FormControl>
         <InputLabel>Email</InputLabel>
         <Input  onChange={(e)=>onValueChange(e)} name="email" value={student.email}/>
        </FormControl>
        <FormControl>
           <Button variant="contained" onClick={()=> editDetails()} >EDIT STUDENT</Button> 
        </FormControl>  
    </Container>
  )
}

export default Editstudent;