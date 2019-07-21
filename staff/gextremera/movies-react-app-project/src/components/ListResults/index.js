import React from "react";
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

import './index.css'

const ListResults = ({ results }) => (
  <ul className='ListResults'>
    {results.map(({ id, title, urlImage, overview }) => (
      <li key={id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={urlImage} />
          <Card.Body>
            <Card.Title>
              <Link to={`/movie/${id}`}>{title}</Link>
            </Card.Title>
            <Card.Text>
             { overview }
            </Card.Text>
          </Card.Body>
        </Card>
      </li>
    ))}
  </ul>
);

export default ListResults;
