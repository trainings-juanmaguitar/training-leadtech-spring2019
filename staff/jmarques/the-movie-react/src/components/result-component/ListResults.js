import React from "react";

import './ListResults.css';

const ListResults = ({ results }) => (
    <div className="container box-card-columns card-columns">
        {results.map(({ id, title, urlImage }) => (
            <div className="card card-card bg-whitetext-white">
                <img width="100%" src={urlImage} alt={title} />
                <div className="card-body">
                    <a className="card-title" href={`/movie/${id}`}>
                        <strong className="card-title">{title}</strong>
                    </a>
                </div>
            </div>
        ))}  
    </div>
);

export default ListResults;
