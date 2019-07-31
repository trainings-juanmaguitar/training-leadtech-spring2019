import { API_KEY } from './constants'
import { getDataFromApi, getMoviesData } from './helpers'

const API_PREFIX = 'https://api.themoviedb.org/3/'

const getDataFromApiMovies = getDataFromApi(API_PREFIX)(API_KEY)

const getMoviesFromApi = url =>
  getDataFromApiMovies({ url, parseResults: getMoviesData })
const getMovieFromApi = url => getDataFromApiMovies({ url })

export const [
  getSearchResults,
  getTopRatedMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getUpcomingMovies
] = [
  'search/movie',
  'movie/top_rated',
  'movie/now_playing',
  'movie/popular',
  'movie/upcoming'
].map(getMoviesFromApi)

export const getMovieDetails = ({ id }) => getMovieFromApi(`/movie/${id}`)()
