import React from 'react';
import CardItem from "./CardsPage/cardspage-components/CardItem/CardItem.jsx";
import {useLocation, useParams} from "react-router-dom";

const ConcreteCardPage = () => {
    const { id } = useParams();
    const location = useLocation();
    return (
        <div>
            <div>
                <h1>Page with path {location.pathname}</h1>
                <h1>News with id : {id}</h1>
            </div>
        </div>
    );
};

export default ConcreteCardPage;