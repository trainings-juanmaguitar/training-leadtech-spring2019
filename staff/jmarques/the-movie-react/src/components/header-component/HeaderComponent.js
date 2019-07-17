import React from "react";
import logo from '../../assets/images/icon-react.png';

const HeaderComponent = () =>  (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
            <img width="50" src={logo} alt="icon-react"/>
        The Movie React</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/popular">Popular</a>
                </li>
            </ul>
        </div>

        <div className="btn-group">
            <div className="btn-group dropleft" role="group">
                <button type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="sr-only">Toggle Dropleft</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/popular">Popular</a>
                </div>
            </div>
            <button type="button" className="btn btn-secondary">
                Secciones
            </button>
        </div>
    </nav> 
);

export default HeaderComponent;