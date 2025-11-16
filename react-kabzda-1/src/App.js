import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dailogs from './components/Dailogs/Dailogs'; 
import Music from './components/Music/Music'; 
import {Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dailogs store={props.store} />}/> 
            <Route path='/profile/*' element={<Profile profilePage={props.store.getState().profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/Music/*' element={<Music musicPage={props.store.getState().musicPage} dispatch={props.dispatch}/>}/>
            <Route />
          </Routes>
        </div>
      </div>
  )
}

export default App;