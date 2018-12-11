import React, { Component } from 'react';

import NumberInput from './numberInput';
import { formatNumber } from './utils';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      values: [0, 0, 0],
    };
  }

  _setValue = (index, value) => {
      const values = this.state.values;
      const result = parseFloat(value);
      values[index] = isNaN(result) ? 0 : result;
      this.setState({ values });
  }

  _formatSum = () => {
      let sum = 0;
      this.state.values.forEach((value) => {
          sum += value;
      });
      return formatNumber(sum);
  }

  render() {
    return (
      <div className="App grid">
        <p className="App-intro"></p>
        <div className="grid-item">
          <NumberInput
            onChange={(value) => this._setValue(0, value)}
            value={this.state.values[0]}
          />
        </div>
        <div className="grid-item">
          <NumberInput
            onChange={(value) => this._setValue(1, value)}
            value={this.state.values[1]}
          />
        </div>
        <div className="grid-item">
          <NumberInput
            onChange={(value) => this._setValue(2, value)}
            value={this.state.values[2]}
          />
        </div>
        <div className="grid-item">
          <p className="output-display">{this._formatSum()}</p>
        </div>
      </div>
    );
  }
}

export default App;
