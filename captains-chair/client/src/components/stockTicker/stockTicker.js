import React from 'react';
import axios from 'axios';

import UpChevron from '../../assets/upChevron';
import DownChevron from '../../assets/downChevron';

import './stockTicker.less';


export default class StockTicker extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    const symbols = ['NASDAQ', 'NYSE', 'INDEXSP', 'MSFT', 'AAPL', 'GOOGL', 'TWTR', 'UBER', 'LYFT', 'IBM', 'CHWY', 'ATVI', 'FB', 'SBUX', 'MU', 'SNAP', 'LOGI'];
    
    axios.post('http://localhost:5000/market/stocks', {symbols: symbols})
      .then(res => {
        this.setState({ quotes: res.data.quotes.quote });
      });
  }

  render = () => {
    const { quotes } = this.state;

    // const svg = styled(Icon);

    if(!quotes.length)
      return null;

    return (
      <div>
          <div className='stock-container'>
            <div className='horizontal-scroll'>
              {
                quotes.map((item, key) => {
                  return (
                    <div className='stock-item-container' key={key}>
                      {
                        (item.change_percentage > 0) ? (
                          <div className='stock-item'><div>{item.symbol}</div><div>{item.last}</div><div>{item.change_percentage}%</div><div><UpChevron className='chevron' /></div></div>
                        ) : (
                         <div className='stock-item'><div>{item.symbol}</div><div>{item.last}</div><div>{item.change_percentage}%</div><div><DownChevron className='chevron' /></div></div>
                        )
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
      </div>
    )
  }

}
