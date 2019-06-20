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

const URL_POSTS = 'https://jsonpl_aceholder.typicode.com/posts';
// <li>qui est esse</li>
// <li>ea molestias quasi exercitationem repellat qui ipsa sit aut"</li>

axios
  .get(URL_POSTS)
  .then(getDataFromResponse)
  .then(getFirstTenItems)
  .then(getItemsList)
  .then(getItemsListString)
  .then(writeHtmlListPosts)
  .catch(error => {
    console.log('error catched!');
    console.error(error);
  });

console.log('Hey!!');
