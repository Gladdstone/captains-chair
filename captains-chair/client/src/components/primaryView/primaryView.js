import React from 'react';
import axios from 'axios';

import CurrentWeather from '../currentWeather/currentWeather';
import VerticalTicker from '../verticalTicker/verticalTicker.js';
import './primaryView.less';


export default class PrimaryView extends React.Component {

  state = {
    trends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/twitter/trends')
      .then(res => {
        const trends = res.data[0].trends;
        console.log(trends);

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
    return (
      <div className='primary-view'>
        <CurrentWeather/>
        <VerticalTicker list={this.state.trends} className='twitter-ticker' />
      </div>
    );
  }

}
