import React from 'react';

import './verticalTicker.less';


export default class VerticalTicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list || []
    }
  }

  render = () => {
    return (
      <div className='ticker-container'>
        <div className='scroll'>
          <ul>
            {
              this.props.list.map((item, key) => {
                if(item.link.length !== 0) {
                  return (
                    <li key={key}><a href={item.link}>{item.text || ''}</a></li>
                  );
                } else {
                  return (
                    <li key={key}>{item.text || ''}</li>
                  );
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }

}
