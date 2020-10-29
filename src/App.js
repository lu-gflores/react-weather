import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar'
import Jumbotron from './components/layout/Jumbotron'
import Container from './components/layout/Container'
import { fetchWeatherLocation } from './api'

import './App.css';


class App extends React.Component {
  state = {
    data: {},
    location: ''
  }

  async componentDidMount() {
    const fetchedLocation = await fetchWeatherLocation();
    this.setState({ data: fetchedLocation })
  }

  handleLocationChange = async (location) => {
    const fetchedLocation = await fetchWeatherLocation()
    this.setState({ data: fetchedLocation, location: location })
  }

  render() {
    const { data, location } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Jumbotron />


      </div>
    );
  }

}

export default App;
