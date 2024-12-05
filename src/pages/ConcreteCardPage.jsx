import React from 'react';
import {useParams} from "react-router-dom";

const ConcreteCardPage = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <div>
                <h1>Card with id : {id}</h1>
            </div>
        </div>
    );
};

export default ConcreteCardPage;