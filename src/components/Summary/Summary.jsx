import React from 'react';

const Summary = ({tshirt}) => {
    const {name , price} = tshirt;
    console.log(tshirt)
    return (
        <div>
            <p><b>Name:</b> {name}, <b>Price:</b> {price}</p>
        </div>
    );
};

export default Summary;