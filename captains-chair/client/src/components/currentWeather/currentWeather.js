import React from 'react';
import axios from 'axios';

import './currentWeather.less';


export default class CurrentWeather extends React.Component {

  state = {
    weather: 'None - that\'s weird',
    icon: '',
    temp: 0.0,
    feelsLike: 0.0,
    sunrise: 1595757310,
    sunset: 1595810309
  }

  componentDidMount() {
    axios.get('http://localhost:5000/weather/current')
      .then(res => {
        const data = res.data;
        this.setState({ 
          weather: data.weather, 
          icon: data.icon, 
          temp: data.temp, 
          feelsLike: data.feels_like, 
          sunrise: data.sunrise, 
          sunset: data.sunset 
        });
      });
  }

  render() {
    const iconUri = 'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png';

    return (
      <div className="current-weather">
        <div className="icon"><img src={iconUri}/></div>
        <div className="weather">
          <ul>
            <li>{this.state.weather}</li>
            <li>Temp: {this.state.temp} Feels like: {this.state.feelsLike}</li>
            <li>Sunrise: {this.state.sunrise} Sunset: {this.state.sunset}</li>
          </ul>
        </div>
      </div>
    )
  }

}
