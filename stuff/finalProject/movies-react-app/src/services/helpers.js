import axios from 'axios'
import urlJoin from 'url-join'

const getUrlImage = imageFileName =>
  `https://image.tmdb.org/t/p/w500${imageFileName}`

export const getResultsFromData = ({ results }) => results

const getData = ({ data }) => data

export const getDataFromApi = PREFIX_URL => apiKey => ({
  url,
  parseResults = d => d
}) => (paramsApi = {}) => {
  const urlApi = urlJoin(PREFIX_URL, url)
  const params = { ...paramsApi, api_key: apiKey }
  console.log({ urlApi, params })
  return axios
    .get(urlApi, { params })
    .then(getData) // data → results (array results, objeto unico)
    .then(parseResults)
}

export const getMoviesData = ({
  page,
  total_pages: totalPages,
  total_results: totalResults,
  results: originalResults
}) => {
  const results = originalResults.map(
    ({ id, title, poster_path: posterPath }) => ({
      id,
      title,
      urlImage: getUrlImage(posterPath)
    })
  )

  return {
    page,
    totalPages,
    totalResults,
    results
  }
}
