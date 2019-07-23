const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`
const truncate = (string) =>{ if (string.length > 100) return string.substring(0,150)+'...'; else return string; }; 

export const getResultsFromData = ({ data: { results } }) => results
export const getData = ({ data }) => data

export const getMovieData = results =>
  results.map(({ id, title, poster_path, overview }) => ({
    id,
    title,
    urlImage: getUrlImage(poster_path),
    overview,
    resume: truncate(overview),
  }))



