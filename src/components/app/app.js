import React, { Component } from 'react';
import Header from '../header'
import Question from '../question'
import Options from '../options'
import Description from '../description'
import birdsData from '../../data/birds-data'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: birdsData,
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
          <Question />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Options />
          </div>
          <div className="col-sm">
            <Description />
          </div>
        </div>
        <button className="btn btn-large" />
      </div>
    );
  }
}

export default App;
