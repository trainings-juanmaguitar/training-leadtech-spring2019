import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

console.log('jQuery works!!!')

axios
  .get(URL_POSTS)
  .then(({ data }) => data)
  .then(data => data.slice(0,10))
  .then(firstTenPosts => firstTenPosts.map(({ title })=> `<li>${title}</li>`))
  .then(firstTenPosts => firstTenPosts.join(''))
  .then(htmlfirstTenPosts =>{
    $('#list_post').html(htmlfirstTenPosts);
  })
  .catch(console.error);
/**
 * En casa intentat crear variable de todas las funciones .then y exportarlo e importarlo com modulos.
 */

 $('form')on('submit', function(e){
   e.preventDefault();
   const value = $('input').val();
   console.log(value);
 });

 console.log('Hey!!!')