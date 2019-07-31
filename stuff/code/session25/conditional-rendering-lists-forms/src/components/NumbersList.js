import React from "react";

export const numbers = [1, 2, 3, 4, 5];

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
      <li key={index}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default NumberList