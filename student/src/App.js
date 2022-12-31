import './App.css';
//components
import NavBar from './components/NavBar';
import StudentManagement from './components/StudentManagement';
import Allstudents from './components/Allstudents';
import Addstudent from './components/Addstudent';
import Editstudent from './components/Editstudent';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

 function App() {
  return (
    <div className='App-header'>
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element= {<StudentManagement/>}/>
      <Route path='/all' element={<Allstudents/>}/>
      <Route path='/add' element={<Addstudent/>}/>
      <Route path='/edit/:id' element={<Editstudent/>}/>
     </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;
