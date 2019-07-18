import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from "./home-component/Home";
import PopularMovies from "./popular-component/PopularMovies";
import Details from "./details-component/Details";
import Search from "./search-query-component/Search";

class App extends Component {

    render() {
        return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/popular" component={PopularMovies} />
                <Route path="/search:query" component={Search} />
                <Route path="/movie/:id" component={Details} />
            </Router>
        );
    }
}

export default App;
