import React from 'react';
import FORM from './comps/form.js';
import WOut from './comps/out.js';


const appid_weather = "";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    wind_speed: undefined,
    weather: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    const url_api = await fetch(`
      https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid_weather}`, {mode: 'cors'});
    const resp = await url_api.json();

    this.setState({
      temp: resp.main.temp,
      city: resp.name,
      wind_speed: resp.wind.speed,
      weather: resp.weather[0].main
    });
  }

  render() {
    return (
      <div className="App">
          <FORM api_get={this.getWeather}/>
          <WOut
              temp = {this.state.temp}
              city = {this.state.city}
              wind = {this.state.wind_speed}
              weather = {this.state.weather}/>
      </div>
    );
  }
}

export default App;
