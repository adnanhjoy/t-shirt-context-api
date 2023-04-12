import React from 'react';
import './Cart.css';
import Summary from '../Summary/Summary';

const Cart = ({cart, removeProduct}) => {
    return (
        <div className='cart-detail'>
            <h2>Order Summary{cart.length}</h2>
            {
                cart.map(tshirt => <Summary
                    key={tshirt._id}
                    tshirt={tshirt[0]}
                ></Summary>)
            }
            {cart.length === 0 ? <p>Please Buy Something !!!</p> : <p>Thanks for Buying</p>}
        </div>
    );
};

export default Cart;