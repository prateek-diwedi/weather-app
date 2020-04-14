import React, { Component } from 'react';
import "./App.css"

import "weather-icons/css/weather-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from "../src/components/weather.component"

let api_key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}`)

    const response = await api_call.json();
    console.log('response --->>', response)

    this.setState({
      city: response.name,
      country: response.sys.country,
      celsius: response.main.temp,
      temp_max: response.main.temp_max,
      temp_min: response.main.temp_min,
      description: response.weather[0].description,
      main: response.weather[0].main
    })
  }

  render() {
    return (
      <div className="App">
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          main={this.state.main}
        />
      </div>
    )
  }
}

export default App;
