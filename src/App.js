import React from 'react';
import { Cars } from './features/car/Cars';
import './App.css';
import Login from './features/user/Login';

function App() {
  return (
    <div className="App">     
      <header className="App-header">
      <Login/>       
      </header>
      <Cars />
        <p>
          4x4 Bazaar - Buy your perfect car online!
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
    </div>
  );
}

export default App;
