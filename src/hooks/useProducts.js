import { useEffect, useState } from "react"

const useProducts =()=>{
    const [products,setProduct]=useState([]);
    useEffect(()=>{
fetch('./products.JSON')
.then(res => res.json())
.then(data => setProduct(data))
    },[])
    // return necessary things
    return [products]
}
export default useProducts;