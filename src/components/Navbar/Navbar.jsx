import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className={"navbar"}>
            <Link to="home">HOME</Link>
            <Link to="shop">SHOP</Link>
            <Link to="news">NEWS</Link>
        </div>
    );
};

export default Navbar;