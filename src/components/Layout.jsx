import React from 'react';
import Navbar from "./Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Layout;