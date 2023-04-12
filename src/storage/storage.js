const shoppingCart = (id) => {
    let setShoppingCart = getShoppingCart();

    const quantity = setShoppingCart[id];
    if(quantity){
        setShoppingCart[id] = quantity + 1;
    }else{
        setShoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(setShoppingCart));
}

const getShoppingCart = () => {
    let setShoppingCart = {};

    const getCart = localStorage.getItem('shopping-cart');
    if(getCart){
        setShoppingCart = JSON.parse(getCart)
    }
    return setShoppingCart;
}
 
export {
    shoppingCart,
    getShoppingCart
}