import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ onSubmitForm }) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handleChange} />
        <button>Search Movie</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func
}

export default SearchForm
