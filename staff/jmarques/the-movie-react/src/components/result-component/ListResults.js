import React from "react";

import './ListResults.css';

const ListResults = ({ results }) => (
    <div className="container box-card-columns card-columns">
        {results.map(({ overview, title, urlImage }) => (
            <div className="card card-card bg-whitetext-white">
                <img width="100%" src={urlImage} alt={title} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{overview}.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        ))}  
    </div>
);

export default ListResults;
