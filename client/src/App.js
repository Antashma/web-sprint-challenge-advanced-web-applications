import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    
    <Router>
      <div className="App">
        <Link to='/bubble-page'>To the Bubbles!</Link>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/bubble-page' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
