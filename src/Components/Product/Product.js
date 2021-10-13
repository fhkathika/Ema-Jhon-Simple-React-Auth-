import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    
    const {name,price,seller,stock,img}=props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                
            <h1 className="products-name">{name}</h1>
            <p><small>by {seller}</small></p>
            <p> $ {price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={()=> props.handleAddToCart(props.product)} className="add-to-cart-btn">{cartIcon} Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Product;