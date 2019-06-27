import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';

import { getDataFromResponse, getImageFromData } from './helpers';

const API_KEY = 'b7cbc829-bc19-4980-a5f3-589dcf4bf752';
const URL_IMAGE = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`;

const button = document.querySelector('#get-image');

button.addEventListener('click', function() {
  axios
    .get(URL_IMAGE)
    .then(getDataFromResponse)
    .then(getImageFromData)
    .then(url => {
      $('#cat-image').attr('src', url);
    });
});
