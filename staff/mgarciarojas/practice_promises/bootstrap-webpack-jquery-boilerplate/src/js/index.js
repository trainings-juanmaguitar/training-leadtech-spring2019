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

const getUrlCommentsPost = numPost =>
  `https://jsonplaceholder.typicode.com/comments?postId=${numPost}`;

$('form').on('submit', function(e) {
  e.preventDefault();
  const value = $('input').val();
  console.log(value);
  axios
    .get(getUrlCommentsPost(value))
    .then(getDataFromResponse)
    .then(getFirstTenItems)
    .then(getItemsList)
    .then(getItemsListString)
    .then(writeHtmlListPosts)
    .catch(error => {
      console.log('error catched!');
      console.error(error);
    });
});
