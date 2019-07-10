import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  console.log(props);
  return <h1>Hello, {props.name}</h1>;
}

const Welcome = (props) => {
  console.log(props);
  return <h1>Hello, {props.name}</h1>;
}

const Welcome = ({name}) => {
  console.log(name);
  return <h1>Hello, {name}</h1>;
}


ReactDOM.render(
  <Welcome name="juanma" />,
  document.getElementById('root')
);

