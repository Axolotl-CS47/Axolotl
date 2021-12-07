import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Map from './Map';
import LogIn from './Login';
// import './App.css';

// main parent Component
const App = (props) => {
  return (
    <div className='app'>
      {/*
            NOTE: The syntax below is for React-Router
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
      <Routes>
        <Route exact path='/' element={<LogIn/>} />
        <Route exact path='/Map.js' element={<MapChart/>} />
      </Routes>
    </div>
  );
};

export default App;