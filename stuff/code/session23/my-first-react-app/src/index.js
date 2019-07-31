import React from "react";
import ReactDOM from "react-dom";

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

const Welcome = ({name}) => <h1>Hello, {name}</h1>
  
ReactDOM.render(
  <Welcome name="juanma" />, 
  document.getElementById('root')
);
