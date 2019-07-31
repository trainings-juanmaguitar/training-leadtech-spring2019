import React from "react";

class NameForm extends React.Component {
  state = { value: "" };

  handleChange = event => {
    const {value} = event.target
    console.log(`${+ new Date()} → handleChange`)
    this.setState({ value }, () => {
      console.log(this.state)
    });
  };

  handleSubmit = event => {
    const {value} = this.state
    alert(`A name was submitted: ${value}`);
    event.preventDefault();
  };

  render() {
    const {value} = this.state;
    const {handleChange, handleSubmit} = this;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
