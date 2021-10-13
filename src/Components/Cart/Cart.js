import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    console.log(cart)
  
    let totalQuantity=0
    let total=0
    for(const product of cart){
        console.log('product',product)
        if(!product.quantity){
            product.quantity=1
        }
        total= total + product.price * product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }
    const shipping=total > 0 ?15 :0
    const tax=(total+shipping)*0.10
    const grandTotal=total+shipping+tax
    return (
        <div className="cart-item">
                 <h3>order smummery</h3>
                <h5>Item ordered: {totalQuantity} </h5>
                <h2>price: $ {total}</h2>
                <h2>Shipping: $ {shipping}</h2>
                <h2>Tax: $ {tax}</h2>
                <h1>GrandTotal: $ {grandTotal}</h1>
        </div>
    );
};

export default Cart;