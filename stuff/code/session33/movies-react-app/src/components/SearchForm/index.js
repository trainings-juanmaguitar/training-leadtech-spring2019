import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Form, InputGroup, Button } from 'react-bootstrap'

const BASE_CLASS = 'SearchForm'

const SearchForm = ({ onSubmitForm, size }) => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    const { value: query } = e.target
    setQuery(query)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitForm(query)
  }

  return (
    <div className={BASE_CLASS}>
      <Form onSubmit={handleSubmit}>
        <Form.Row >
          <Form.Group style={{ width: '100%', margin: '0'}}>
            <InputGroup size={size} style={{ width: '100%'}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">🔍</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Movie title..."
                aria-describedby="inputGroupPrepend"
                required
                value={query}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              <Button type="submit">Search Movie</Button>
            </InputGroup>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  )
}

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func,
  size: PropTypes.string
}

export default SearchForm
