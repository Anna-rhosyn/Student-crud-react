import express from 'express';
import { addStudent,getStudent,getstudent,editStudent,delStudent } from '../controller/student-controller.js'

const router=express.Router();

router.post('/add',addStudent);
router.get('/all',getStudent);
router.get('/:id',getstudent);
router.put('/:id',editStudent);
router.delete('/:id',delStudent);

export default router;