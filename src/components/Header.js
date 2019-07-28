import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/giphy" className="item">Giphy Search</Link>
            <Link to="/categories" className="item">Categories</Link>
            <Link to="/" className="item">Dashboard</Link>
            <div className="right menu">
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;