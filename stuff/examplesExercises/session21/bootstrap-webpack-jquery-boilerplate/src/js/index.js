import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';

import {
  getDataFromResponse,
  getFirstTenItems,
  getItemsList,
  getItemsListString,
  writeHtmlListPosts,
} from './helpers';

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

const getUrlCommentsPost = numPost =>
  `https://jsonplaceholder.typicode.com/comments?postId=${numPost}`;

//jsonplaceholder.typicode.com/posts/1/comments
// <li>qui est esse</li>
// <li>ea molestias quasi exercitationem repellat qui ipsa sit aut"</li>

axios
  .get(getUrlCommentsPost(1))
  .then(getDataFromResponse)
  .then(getFirstTenItems)
  .then(console.log)
  // .then(getItemsList)
  // .then(getItemsListString)
  // .then(writeHtmlListPosts)
  .catch(error => {
    console.log('error catched!');
    console.error(error);
  });

$('form').on('submit', function(e) {
  e.preventDefault();
  const value = $('input').val();
  console.log(value);
});

console.log('Hey!!');
