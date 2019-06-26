import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';

import {
  getDataFromResponse,
  getImageURL,
  writeImageRandom,
} from './helpers';


const URL_IMG = 'https://api.thecatapi.com/v1/images/search?api_key=1339deac-1b29-40f3-b776-44dc3e93179b';


$('button').on('click', function(e) {
  axios
    .get(URL_IMG)
    .then(getDataFromResponse)
    .then(getImageURL)
    .then(writeImageRandom)

});

console.log('Hey!!');
