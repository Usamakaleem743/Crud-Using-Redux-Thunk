import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Components/Table';
import Addnew from './Components/Addnew';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Edit } from './Components/Edit';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Table/>}/>
           <Route path='/add' element={<Addnew />}/>
           <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
