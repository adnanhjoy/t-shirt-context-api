import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';
import { shoppingCart } from '../../storage/storage';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const buyNowBtn = (tshirt) => {
        const exixt = cart.find(ts => ts._id === tshirt._id);
        if(exixt){
            alert('Already Added')
        }else{
            setCart([...cart, tshirt]);
        }
        shoppingCart(tshirt._id)
        
    }


    const removeProduct = (id) => {
        const newCart = cart.filter(pd => pd._id !== id);
        setCart(newCart);
    }

    return (
        <div className='home-container'>
           <div className="tshirt-container">
           {
                tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    buyNowBtn={buyNowBtn}
                ></TShirt>)
            }
           </div>
           <div className="cart-container">
                <Cart
                    cart={cart}
                    removeProduct={removeProduct}
                ></Cart>
           </div>
        </div>
    );
};

export default Home;