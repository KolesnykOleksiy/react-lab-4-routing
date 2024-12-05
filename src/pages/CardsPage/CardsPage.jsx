import React from 'react';
import {useLocation} from "react-router-dom";
import CardItem from "./cardspage-components/CardItem/CardItem.jsx";

const CardsPage = () => {

    const cardList = [
        {
            id: 1,
            title: "Clothes 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti enim excepturi ipsum, maxime nisi pariatur ratione repudiandae saepe! Nostrum."
        },
        {
            id: 2,
            title: "Clothes 2",
            description: "Lorem ipsum dolor sit ameti enim excepturi ipsum, maxime nisi pariatur ratione repudiandae saepe! Nostrum."
        },
        {
            id: 3,
            title: "Food 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deleniti  nisi pariatur ratione repudiandae saepe! Nostrum."
        },
        {
            id: 4,
            title: "Food 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing  enim excepturi ipsum, maxime nisi pariatur ratione repudiandae saepe! Nostrum."
        },

    ]

    return (
        <div>
            <div>Cards list :</div>
            <div style={{display: "flex", gap: 15, flexDirection: "column"}}>
                {cardList.map((card, index) => (
                    <CardItem card={card} key={index} />
                ))}
            </div>

        </div>
    );
};

export default CardsPage;