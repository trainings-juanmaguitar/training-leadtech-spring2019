import React, {Component} from "react";
import ReactDOM from "react-dom";

import Toggle, {message} from './components/Toggle'
import Button from './components/Button'

//const name = "juanma"
//const greeting = 

console.log(message)
const Message = ({name}) => (<h1>Hello {name}!</h1>)

class Text extends Component {

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    console.log('componentDidMount...')
  }

  render() {
    return (
      <div>
        <Message name="juanma" />
        <Button />
        <Toggle />
        <p>{ this.props.country }</p>
        <p>{ this.state.date.toLocaleTimeString() }</p>
      </div>
    )
  }
}




// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

//const Welcome = ({name}) => <h1>Hello, {name}</h1>
// <Welcome name="juanma" />

ReactDOM.render(
  <Text country="Norfolk Island"/>, 
  document.getElementById('root')
);
