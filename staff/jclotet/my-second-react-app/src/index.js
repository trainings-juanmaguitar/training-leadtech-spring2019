import React from 'react';
import ReactDOM from 'react-dom';

const Message = (props) => <h1>Hello {props.name}</h1>

class Text extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDiddMount() {

  }

  render() {
    return (
      <Message name="juanma"></Message>
    );
  }
}



ReactDOM.render(<Text country="Catalonia" />, document.getElementById('root'));


