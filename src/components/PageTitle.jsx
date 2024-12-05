import React from 'react';
import {Outlet} from "react-router-dom";

const PageTitle = ({ title, children }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>(Current path: {location.pathname})</h2>
            {children || <Outlet/>}
        </div>
    );
};

export default PageTitle;