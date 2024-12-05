import React from 'react';
import {useLocation} from "react-router-dom";

const NewsPage = () => {
    const location = useLocation();
    return (
        <div>
            <h1>Page with path {location.pathname}</h1>
            <div>News list :</div>
        </div>
    );
};

export default NewsPage;