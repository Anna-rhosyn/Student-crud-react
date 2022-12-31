import { useEffect,useState } from 'react';
import{ Table,TableHead,TableBody,TableCell,TableRow ,styled, Button }from '@mui/material';
import { getStudent,delStudent, } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable=styled(Table)`
   width:90%;
   margin:50px auto 0 auto;
`
const Thead=styled(TableRow)`
    background:black;
     & > th  {color:white; 
        font-size:20px; }
`;
const TBody= styled(TableRow)`
   & > td {
     font-size:20px;
   }
`

const Allstudents=()=>{
       
   const [student,setStudent]=useState([]);

    useEffect(()=>{
       getAllStudents();
    },[]);

    const getAllStudents=async()=>{
       let response= await getStudent();
       setStudent(response.data);
    }

    const delStudentdetais=async(id)=>{
        await delStudent(id);
        getAllStudents();
    }

    return(
        <StyledTable >
           <TableHead>
            <Thead>
             <TableCell>Id</TableCell>
             <TableCell>Name</TableCell>
             <TableCell>Username</TableCell>
             <TableCell>Regno</TableCell>
             <TableCell>Email</TableCell> 
             <TableCell></TableCell>           
            </Thead>
           </TableHead> 
           <TableBody>
             {
                student.map(student=>(
                    <TBody key={student._id}>
                    <TableCell>{student._id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.username}</TableCell>
                    <TableCell>{student.regnumber}</TableCell>
                    <TableCell>{student.email}</TableCell>  
                    <TableCell>
                        <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${student._id}`} >📝</Button>
                        <Button variant='contained' color='warning' onClick={()=>delStudentdetais(student._id)} >🗑️</Button>
                    </TableCell>          
                   </TBody>
                ))
             }   
           </TableBody> 
        </StyledTable>
    )
}
export default Allstudents;