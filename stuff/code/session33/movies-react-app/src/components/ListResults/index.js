import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Card from 'react-bootstrap/Card'
import Pagination from 'react-js-pagination'

import './index.css'

const ListResults = ({ title, results, page, totalResults, totalPages, onChangePage }) => (
  <div>
    <h1>
      {title} <small>({totalResults} results found)</small>
    </h1>
    <p>
      Displaying page {page} of {totalPages}{' '}
    </p>
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={totalResults}
      pageRangeDisplayed={10}
      onChange={onChangePage}
      itemClass="page-item"
      linkClass="page-link"
    />
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  </div>
)

ListResults.propTypes = {
  title: PropTypes.string,
  results: PropTypes.array,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number
}

export default ListResults
