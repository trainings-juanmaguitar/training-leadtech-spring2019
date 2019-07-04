import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';
/**
 * una vez creado los helpers importo esto
 */
import {
  getDataFromResponse,
  getFirstTenItems,
  getItemsList,
  getItemsListString,
  writeHtmlListPosts,
} from './helpers';

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';
/*
------- Previo a  crear const con las funciones -------
axios
  .get(URL_POSTS)
  .then(({ data }) => data)
  .then(data => data.slice(0,10))
  .then(firstTenPosts => firstTenPosts.map(({ title }) => `<li>${title}</li>`))
  .then(firstTenItemList => firstTenItemList.join(''))
  .then(htmlListFirstTenPosts =>{
    $('#list_posts').html(htmlListFirstTenPosts)
  })
  .catch(console.error);
*/

/*
------- Previo a crear Helpers -------

const getDataFromResponse = ({ data }) => data;
const getFirstTenItems = data => data.slice(0, 10);
const getItemsList = firstTenPosts =>
  firstTenPosts.map(({ title }) => `<li>${title}</li>`);
const getItemsListString = firstTenItemsList => firstTenItemsList.join('');
const writeHtmlListPosts = htmlListFirstTenPosts => {
  $('#list_posts').html(htmlListFirstTenPosts);
};

axios
  .get(URL_POSTS)
  .then(getDataFromResponse)
  .then(data => data.slice(0,10))
  .then(getItemsList)
  .then(getItemsListString)
  .then(writeHtmlListPosts)
  .catch(console.error);

*/

/**
 * una vez hemos crado los helpers muestra lo mismo que el caso anterior pero tenemos arriba
 * una llamada a un helper con las const que contienen las funciones.
 */
axios
  .get(URL_POSTS)
  .then(getDataFromResponse)
  .then(getFirstTenItems)
  .then(getItemsList)
  .then(getItemsListString)
  .then(writeHtmlListPosts)
  .catch(console.error);

$('form').on('submit', function(e) {
  e.preventDefault();
  const value = $('input').val()
  console.log(value)
});
console.log('Hey!!');
