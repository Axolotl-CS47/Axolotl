import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  // <Router>
    <Map />,
  // </Router>,
  document.getElementById('root')
);