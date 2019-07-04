const getDataFromResponse = ({ data }) =>  data;
const getImageURL = ([{ url }]) =>  url;
const writeImageRandom = urlImageRandom => {
  $("#imgRandom").attr("src", urlImageRandom);
};


export {
  getDataFromResponse,
  getImageURL,
  writeImageRandom
};
