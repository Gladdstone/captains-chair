import React from 'react';
import axios from 'axios';

import './stockTicker.less';


export default class StockTicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      stocks: []
    }
  }

  componentDidMount() {
    this.setState({ stocks: this.props.stocks });
  }

  render = () => {
    const { stocks } = this.state;
    return (
      <div class='ticker-container'>
        <div className='scroll'>
          {
            stocks.list.map((item, key) => {
              <div>{item.symbol} {item.last}</div>
            })
          }
        </div>
      </div>
    )
  }

}
