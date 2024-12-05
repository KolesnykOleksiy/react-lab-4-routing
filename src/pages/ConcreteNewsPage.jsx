import React from 'react';
import CardItem from "./CardsPage/cardspage-components/CardItem/CardItem.jsx";
import {useLocation, useParams} from "react-router-dom";

const ConcreteCardPage = () => {
    const { id } = useParams();
    return (
        <div>
            <div>
                <h1>News with id : {id}</h1>
            </div>
        </div>
    );
};

export default ConcreteCardPage;