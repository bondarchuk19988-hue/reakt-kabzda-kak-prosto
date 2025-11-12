import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

  const root = createRoot(document.getElementById('root'))

let renderEntireTree = (state) => {
      
    root.render(
          <BrowserRouter>
            <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
         document.getElementById('root')
        )
}
renderEntireTree(store.getState())

store.subscribe(renderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
