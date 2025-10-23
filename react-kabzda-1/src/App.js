import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dailogs from './components/Dailogs/Dailogs'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dailogs' element={<Dailogs/>}/> 
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/' element={<Profile/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;