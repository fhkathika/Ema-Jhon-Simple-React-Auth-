import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReview = () => {
    const [products,setProducts]=useProducts()
    const [cart]=useCart(products)
    return (
        <div className="shopContainer">
           <div className="productContainer">

           </div>
           <div className="cartContainer">
           <Cart cart={cart}></Cart>
           </div>
          
        </div>
    );
};

export default OrderReview;