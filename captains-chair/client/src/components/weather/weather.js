import React from 'react';

import './Weather.less';


export default class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: 'None - that\'s weird',
      icon: '',
      temp: 0.0,
      min: 0.0,
      max: 0.0,
      feelsLike: 0.0,
      sunrise: 1595757310,
      sunset: 1595810309
    };
  }

  componentDidMount() {
    this.setState({
      weather: this.props.weather.weather,
      icon: this.props.weather.icon,
      temp: this.props.weather.temp,
      feelsLike: this.props.weather.feelsLike
    });

    if(this.props.weather.sunrise && this.props.weather.sunset) {
      this.setState({
        sunrise: this.props.weather.sunrise,
        sunset: this.props.weather.sunset
      });
    }

    if(this.props.weather.min && this.props.weather.max) {
      this.setState({
        min: this.props.weather.min,
        max: this.props.weather.max
      });
    }
  }

  render() {
    const { weather, icon, temp, min, max, feelsLike, sunrise, sunset } = this.state;
    const iconUri = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';

    return (
      <div className={['weather-container', this.props.size].join(' ')}>
        <div className="icon"><img src={iconUri}/></div>
        <div className="weather">
            {(min !== 0.0 && max !== 0.0) ? (
              <ul>
                <li>{weather}</li>
                <li>Min: {min}</li>
                <li>Max: {max}</li>
              </ul>
            ) : (
              <ul>
                <li>Temp: {temp} Feels like: {feelsLike}</li>
                {(sunrise !== 1595757310 && sunset !== 1595810309) ? (
                  <li>Sunrise: {sunrise} Sunset: {sunset}</li>
                ) : (<li></li>)}
              </ul>
            )}
        </div>
      </div>
    );
  }

}
