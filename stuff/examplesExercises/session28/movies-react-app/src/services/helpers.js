const getUrlImage = imageFileName => `https://image.tmdb.org/t/p/w500${imageFileName}`

export const getResultsFromData = ({ data: { results } }) => results

export const getMovieData = results =>
  results.map(({ title, poster_path }) => ({
    title,
    urlImage: getUrlImage(poster_path),
  }))