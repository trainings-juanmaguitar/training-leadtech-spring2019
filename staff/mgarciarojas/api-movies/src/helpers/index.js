const getDataFromResponse = ({ data }) => data;
const getResultsFromData = ({ results }) => results;
 const getNameFromResults = results => results.map(({name}) =>  name);


export { getDataFromResponse, getResultsFromData,getNameFromResults };
 