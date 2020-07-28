import React from 'react';

import Weather from '../weather/weather';

import './forecast.less';


const Forecast = (list) => {

  console.log(list);

  return (
    <div className='forecast-container'>
      {
        list.list.map((item, key) => {
          return(<Weather className='weather-component' weather={item} size='small' />)
        })
      }
    </div>
  )

}

export default Forecast;
