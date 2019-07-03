import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = e => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Clicked {this.state.counter} times
      </button>
    );
  }
}

export default Button