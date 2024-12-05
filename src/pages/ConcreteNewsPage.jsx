import React from 'react';
import {useParams} from "react-router-dom";

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