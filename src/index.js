import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { Provider } from "react-redux";
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // With Provider we define the scope of store. For this e-cart app, scope of store is the entire application 
    // so that every component can access the store. 
    <Provider store={store}> 
       <App/>
    </Provider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
