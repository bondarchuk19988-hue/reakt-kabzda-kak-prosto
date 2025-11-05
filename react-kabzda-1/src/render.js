import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { addPost, updateNewPostText } from './redux/state';
import App from './App';

let root = null;

export let renderEntireTree = (state) => {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById('root'));
  }
  
  root.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  );
}