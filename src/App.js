import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Add from './components/Add';
import Update from './components/Update';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  return (
    
      <BrowserRouter>

          <Routes>
            
            <Route path='/about' element={<Protected Cmp={About}/>} />
            <Route path='/contact' element={<Protected Cmp={Contact}/>} />
            <Route path='/add' element={<Protected Cmp={Add} />} />
            <Route path='/update/:id' element={<Protected Cmp={Update} />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Protected Cmp={Home}/>} />
          </Routes>
        
        </BrowserRouter>
      
  );
}

export default App;
