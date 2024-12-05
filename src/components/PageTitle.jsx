import React from 'react';
import {Outlet} from "react-router-dom";

const PageTitle = ({ title, children }) => {
    return (
        <div>
            <h1>{title} (Current path: {location.pathname})</h1>
            {children || <Outlet/>}
        </div>
    );
};

export default PageTitle;