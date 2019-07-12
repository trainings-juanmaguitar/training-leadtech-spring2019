const getDataFromResponse = ({ data }) => data;
const getMovieFromData = ({results}) => results;
const getMovieNameFromData = ([{name}]) => name;

export { getDataFromResponse, getMovieFromData, getMovieNameFromData };
