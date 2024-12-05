import React from 'react';
import {useLocation} from "react-router-dom";

const CardsPage = () => {
    const location = useLocation();
    return (
        <div>
            <h1>Page with path {location.pathname}</h1>
            <div>Cards list :</div>
        </div>
    );
};

export default CardsPage;