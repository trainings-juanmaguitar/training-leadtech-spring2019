import React, { Component } from "react";

import TemperatureInput from './TemperatureInput'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    );
  }
}

export default Calculator;
