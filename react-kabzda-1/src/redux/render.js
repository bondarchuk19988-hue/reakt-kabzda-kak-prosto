import React from 'react';
import ReactDOM from 'react-dom/client';
import '.././index.css';
import { addPost, updateNewPostText} from '.././state';
import App from '../App';

export let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state}  addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
}
