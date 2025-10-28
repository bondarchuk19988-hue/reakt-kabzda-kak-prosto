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
            <Route path='/dialogs/*' element={<Dailogs messagesPage={props.state.messagesPage} />}/> 
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;