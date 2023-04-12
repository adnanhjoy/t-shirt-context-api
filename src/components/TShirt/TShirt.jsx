import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt, buyNowBtn}) => {
    const {_id, picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => buyNowBtn(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;