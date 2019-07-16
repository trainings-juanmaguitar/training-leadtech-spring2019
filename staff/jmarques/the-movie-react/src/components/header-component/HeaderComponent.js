import React from "react";
import logo from '../../assets/images/icon-react.png';

const HeaderComponent = () =>  (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img width="50" src={logo} alt="icon-react"/>
        The Movie React</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Films</a>
                </li>
            </ul>
        </div>
    </nav> 
);

export default HeaderComponent;