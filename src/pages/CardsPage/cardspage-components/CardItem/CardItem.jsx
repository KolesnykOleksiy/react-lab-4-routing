import React from 'react';
import './CardItem.css'
import {Link} from "react-router-dom";
const CardItem = ({card}) => {

    const {id, title, description} = card;
    console.log(card);
    return (
        <Link to={`${id}`}>
            <div className={"card-block"}>
                <div>
                    {id} . {title}
                </div>
                <div>
                    {description}
                </div>
            </div>
        </Link>
    );
};

export default CardItem;