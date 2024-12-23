import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Person name="John" age="30"/>
    <Button text="Click me!" onClick={() => console.log("Button clicked")} />
    <Header title="Welcome to my website!"/>  
    <List items={["apple", "banana", "orange"]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

