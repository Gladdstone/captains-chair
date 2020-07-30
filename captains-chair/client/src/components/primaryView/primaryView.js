import React from 'react';
import axios from 'axios';


import Forecast from '../forecast/forecast';
import StockTicker from '../stockTicker/stockTicker';
import VerticalTicker from '../verticalTicker/verticalTicker';
import Weather from '../weather/weather';

import './primaryView.less';


export default class PrimaryView extends React.Component {

  state = {
    dataLoaded: false,
    forecast: [],
    quotes: {},
    trends: [],
    weather: {}
  }

  componentDidMount() {
    this.loadData();
    this.getTwitterTop50();
  }

  loadData = () => {
    axios.get('http://localhost:5000/weather/current')
      .then(res => {
        this.setState({ weather: res.data });

        axios.get('http://localhost:5000/weather/seven-day')
          .then(res => {
            this.setState({ forecast: res.data.list });
            console.log(res.data.list);

            this.setState({ dataLoaded: true });
          });
      });
  }

  getTwitterTop50 = () => {
    axios.get('http://localhost:5000/twitter/trends')
      .then(res => {
        const trends = res.data[0].trends;

        let trendArr = []
        for(let i = 0; i < trends.length; i++) {
          trends[i].name = trends[i].name.substring(0,1) === '#' ? trends[i].name : '#' + trends[i].name;
          const trendObj = { link: trends[i].url, text: trends[i].name };
          trendArr.push(trendObj);
        }
        this.setState({ trends: trendArr });
      })
  }

  render() {
    const { dataLoaded, forecast, trends, weather } = this.state;
    return (
      <div>
        {
          dataLoaded &&
          <div className='container'>
            <div className='primary-view'>
              <div className='secondary-view'>
                <Weather weather={weather} size='large' />
              </div>
              <div className='footer'>
                <div class='tertiary-view'>
                  <Forecast list={forecast} className='forecast' />
                  <VerticalTicker list={trends} className='twitter-ticker' />
                </div>
                <StockTicker className='stock-ticker' />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }

}
