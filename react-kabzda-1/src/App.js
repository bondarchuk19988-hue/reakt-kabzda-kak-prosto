import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dailogs from './components/Dailogs/Dailogs'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dailogs state={props.state.messagesPage} />}/> 
            <Route path='/profile/*' element={<Profile state={props.state.profilePage}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;