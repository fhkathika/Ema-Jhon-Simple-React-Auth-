import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart= products =>{
   const [cart,setCart] =useState([])
   useEffect(()=>{
       if(products.length){
           const saveCart= getStoredCart()
           const storeCart=[]
           for(const key in saveCart){
 const addedProduct=products.find(product =>product.key ===key)
 if(addedProduct){
    //  set quentity
    const quentity=saveCart[key]
    addedProduct.quentity=quentity;
    storeCart.push(addedProduct)
 }
           }
           setCart(storeCart)

       }
   },[products])
   return [cart];
}
export default useCart;