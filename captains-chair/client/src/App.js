import React from 'react';

import DateHeader from './components/dateHeader/dateHeader';
import PrimaryView from './components/primaryView/primaryView';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div className='content'>
      <DateHeader/>
      <PrimaryView/>
    </div>);
  }
}
