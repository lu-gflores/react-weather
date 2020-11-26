import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar'
import GlobalStyles from './components/GlobalStyle'
import Weather from './components/Weather'
function App() {

    return (
      <div className="App container">
      <GlobalStyles />
        <Navbar />
        <Weather />
      </div>
    );


}

export default App;
