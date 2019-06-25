import 'bootstrap';
import axios from 'axios';
import '../scss/index.scss';

import {
  getDataFromResponse,
  getImageFromData
} from './helpers';

const getURLcatsImages = `https://api.thecatapi.com/v1/images/search?api_key=f2084184-e70a-4f3d-a8ac-b00f10858db5`;

$('form').on('submit', function(e) {
  e.preventDefault();
  axios
    .get(getURLcatsImages)
    .then(getDataFromResponse)
    .then(getImageFromData)
    .then(url => {
      $('#cat-image').attr('src', url)
    });
});
