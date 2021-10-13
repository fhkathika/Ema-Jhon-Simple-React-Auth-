import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        console.log('---1--- product called')
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            console.log('---2--- product received')
        })
    },[])

    useEffect(()=>{
        console.log('----3---- Local Storage call')
      if(products.length){
        const saveCart=getStoredCart()
        // console.log(saveCart)
        const storeCart=[]
        for(const key in saveCart){
            // console.log(saveCart[key])
            const addedProduct=products.find(product =>product.key===key)
            // console.log(key,addedProduct)
            if(addedProduct){
                const quantity=saveCart[key]
                addedProduct.quantity=quantity
                // console.log(addedProduct)
                storeCart.push(addedProduct)
              
            }
            
        }
        setCart(storeCart)

      }
    },[products])

    const handleAddToCart =(product)=>{
    //    const newCart=[...cart]
       const existingInCart=cart.find(cart=>cart.key===product.key);
       let newCart=[]
       if(existingInCart){
           const rest=cart.filter(pd => pd.key !== product.key);

           existingInCart.quantity=existingInCart.quantity+1;
           newCart=[...rest,product]
       }
       else{
           product.quantity=1;
           newCart=[...cart,product]
       }
       setCart(newCart)
    //    save to localStorage
    addToDb(product.key)
      

    }
    return (
        <div className="shopContainer">
            <div className="productContainer">
              
                {
                    products.map(product =>
                    <Product 
                        key={product.key}
                        product= {product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
                </div>    
            <div className="cartContainer">
           <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Shop;