import axios from "axios";
import urlJoin from 'url-join'

const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`

export const getResultsFromData = ({ results }) => results

const getData = ({ data }) => data

export const getDataFromApi = PREFIX_URL => api_key => ({url, parseResults = d => d}) => (paramsApi = {}) => {
  const urlApi = urlJoin(PREFIX_URL, url)   
  const params = { ...paramsApi, api_key}
  console.log(PREFIX_URL)
  console.log(url)
  console.log(urlApi)
  return axios
    .get(urlApi, { params })
    .then(getData) // data → results (array results, objeto unico)
    .then(parseResults)
}

export const getMoviesData = ({results}) =>
  results.map(({ id, title, poster_path }) => ({
    id,
    title,
    urlImage: getUrlImage(poster_path),
  }))