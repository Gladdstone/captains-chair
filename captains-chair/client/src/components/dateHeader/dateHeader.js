import React from 'react';
import axios from 'axios';

import './dateHeader.less';


export default class DateHeader extends React.Component {

  state = {
    date: '1 January, 1970'
  }

  componentDidMount() {
    axios.get('http://localhost:5000/date/long')
      .then(res => {
        const date = res.data.date;
        this.setState({ date });
      });
  }

  render() {
    return(
      <div className="header">
        <div className="date-header">
          <h1>{this.state.date}</h1>
        </div>
      </div>
    );
  }

}
