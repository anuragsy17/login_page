import logo from './logo.svg';
import './Sass/main.css'
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'

import Loginpage from './Component/Loginpage';
import Signup from './Component/Signup';
import Header from './Component/Header';
import Home from './Component/Home';
import { AppWithNavigation } from './Component/Loginpage';

class App extends Component {
  state = {}
  render() {
    return (
      <>
      
        <Header />
        {/* <Routes>
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </>
    );
  }
}


export default App;
