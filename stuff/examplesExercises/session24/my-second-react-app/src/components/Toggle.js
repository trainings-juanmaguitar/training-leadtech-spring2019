import React, {Component} from "react";

const message = 'this component is super cool!'


class Toggle extends Component {

  state = { isToggleOn: true }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export { message }
export default Toggle
