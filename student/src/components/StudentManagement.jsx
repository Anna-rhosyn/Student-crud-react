import {styled,Container,Typography,Box,ImageList,ImageListItem} from '@mui/material';


const Con=styled(Container)`
   margin:50px auto 0 auto;
   font-size:20px;
   font-weight:600;
   line-height:2;
   
   & > h4 {
      background:#A0522D;
      textAlign: center;
      color:#FFEFD5;
   }

   & > h3{
    color:white;
    text-shadow: 2px 2px #ff0000;
   }
`

const StudentManagement=()=>{
    return(
        <div className='home' >
        <Con>
         <Typography align='center' variant='h4'>Student Management System</Typography>
        <p>Schools and Universities are the foundation of knowledge and an educational body on which students rely upon.
             Therefore, they need to maintain a proper database of their students.Over the recent years, the performance and efficiency of the education industry have been enhanced by using the Student Management System. 
             Student-centric management systems work to make the management of information more accessible.
           <br/><br/>
               This tool is used to  productively taken over the workload of the admin department with its well-organized, easy, and reliable online school management system.
        </p>
        <Typography align='center' variant='h3'>Welcome...</Typography>
        

        </Con>
        </div>

    )
}





export default StudentManagement;