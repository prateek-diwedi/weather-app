import React from 'react';
import "./App.css"

import "weather-icons/css/weather-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from "../src/components/weather.component"

let api = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
     <Weather/>
    </div>
  );
}

export default App;
