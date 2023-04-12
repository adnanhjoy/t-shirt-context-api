import React from 'react';

const Cart = ({cart, removeProduct}) => {
    return (
        <div>
            <h2>Order Summary{cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => removeProduct(tshirt._id)}>X</button>
                    </p>) 
            }
            {cart.length === 0 ? <p>Please Buy Something !!!</p> : <p>Thanks for Buying</p>}
        </div>
    );
};

export default Cart;