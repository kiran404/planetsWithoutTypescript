import React, { useEffect, useState } from "react";
import './App.css';
import Home from "./components/Home";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Planets from "./components/Planets";



function App() {

  return (
    <Router>
      <div className='menu-container'>
        <Menu />
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/planets' component={Planets} />
      </div>
    </Router>
  );
}

export default App;
