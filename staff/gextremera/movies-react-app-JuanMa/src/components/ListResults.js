import React from "react";

import './ListResults.css'

const ListResults = ({ results }) => (
  <ul className='ListResults'>
    {results.map(({ title, urlImage }) => (
      <li>
        <img src={urlImage} alt={title} />
        <h3>{title}</h3>
      </li>
    ))}
  </ul>
);

export default ListResults;
