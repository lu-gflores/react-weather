import React from 'react';
import Navbar from './components/layout/Navbar'
import Jumbotron from './components/layout/Jumbotron'
import './App.css';

console.log(process.env.REACT_APP_OPENWEATHER_API_KEY)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
