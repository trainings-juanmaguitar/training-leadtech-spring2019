import axios from "axios";

import {API_KEY} from './constants'
import {getResultsFromData, getMovieData, getData} from './helpers'

const getUrlApiSearch = query =>
`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

const getUrlApiMovieDetails = id =>
`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

const urlApiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const urlApiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

const urlApiNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

// getDataMoviesFromApi('movie/now_playing')
// -> añadir prefix a la url  -> https://api.themoviedb.org/3/
// -> añadir apiKey a la url -> api_key=${API_KEY}
// -> devuelve directmente array datos ya preparado para uso 

// getMovieDetails => getDataMoviesFromApi('movie/now_playing') // bind

const getDataMoviesFromApi = (apiKey, getResults, getSpecificData, url, query=null ) => {
let urlApi=""
query ?  urlApi=`https://api.themoviedb.org/3/${url}?query=${query}&api_key=${apiKey}`  : urlApi=`https://api.themoviedb.org/3/${url}?api_key=${apiKey}` 
console.log(urlApi)
return axios
.get(urlApi)
.then(getResults)
.then(getSpecificData)
}

const getMovies = getDataMoviesFromApi.bind(null, API_KEY,getResultsFromData,getMovieData )

export const getSearchResults = (query) => getMovies('search/movie', query)

 export const getMovieDetails = id => {
  const url = getUrlApiMovieDetails(id);
   return axios
     .get(url)
     .then(getData)
 }
 export const getPopularMovies = () => getMovies('movie/popular')
 export const getTopRatedMovies = () => getMovies('movie/top_rated')
 export const getNowPlayingMovies = () =>  getMovies('movie/now_playing')



