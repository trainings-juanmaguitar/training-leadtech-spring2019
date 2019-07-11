import React, {Component} from "react";
import axios from 'axios'
import { getDataFromResponse, getResultsFromData, getNameFromResults } from '../helpers';

const API_KEY = '96810ced9d78cc20922c960d538f43af';
// example api request https://api.themoviedb.org/3/movie/550?api_key=96810ced9d78cc20922c960d538f43af

const stylesImage = {
    border: '1px solid red',
    height: '300px',
    width: '100%',
    display: 'block',
    marginTop : '20px',
    backgroundImage: 'url(https://cdn2.thecatapi.com/images/cp3.jpg)',
    backgroundSize: 'cover'
}

class MovieResults extends Component {

    state = {
        value: '',
        listItems: []
    }

    handleChange = event => {
      const {value} = event.target
      this.setState({ value }, () => {
        console.log(this.state.value)
      });
    };
    handleSubmit = event => {
        const {value, listItems} = this.state
        const URL_SEARCH = `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${this.state.value}&page=1`
        alert(`A new query was submitted: ${value}`);
        axios
            .get(URL_SEARCH)
            .then(getDataFromResponse)
            .then(getResultsFromData)
            .then(getNameFromResults)
         
        event.preventDefault();
      };

    render() {
        const {value, listItems} = this.state;
        const {handleChange, handleSubmit} = this;
    
        return (
          <div> 
            <form onSubmit={handleSubmit}>
          <label>
            Search anything:
            <input
              type="text"
              value={value}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul id="list_posts">{listItems}</ul>
        </div>
         
        );
      }

}

export default MovieResults