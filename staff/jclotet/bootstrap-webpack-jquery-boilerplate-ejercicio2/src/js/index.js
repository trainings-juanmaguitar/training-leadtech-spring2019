import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';



// console.log('jQuery works!');




// Your jQuery code

$('#image-button').on('click', (e)=>{
  e.preventDefault();
  const URL_POSTS = `https://api.thecatapi.com/v1/images/search?api_key=48ce81be-22b4-4bac-9ce1-44a94f2e7917`;
  const getDataFromResponse1 = ({data})=> data;
  const getDataFromResponse2 = ([{url}])=> url;
  const getImage = imageUrl => {$("#list_posts").replaceWith(`<img id="list_posts" src="${imageUrl}" alt="cat">`)};

  axios
  .get(URL_POSTS)
  .then(getDataFromResponse1)
  .then(getDataFromResponse2)
  .then(getImage)
  .catch('error----->', console.error);
})

