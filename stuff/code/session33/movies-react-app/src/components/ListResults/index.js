import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import './index.css'

const ListResults = ({ results }) => (
  <ul className="ListResults">
    {results.map(({ urlImage, title, id }) => (
      <li key={id}>
        <Card>
          <Card.Img variant="top" src={urlImage} />
          <Card.Body>
            <Card.Title>
              <Link to={`/movie/${id}`}>{title}</Link>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </li>
    ))}
  </ul>
)

export default ListResults
