import React, { useEffect, useState } from 'react'
import FetchAPI from '../FetchAPI/fetchAPI'
const products = () => {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        const products = async ()=>{
            try {
                const res =  await FetchAPI('products')
                setproducts(res)
            } catch (error) {
                console.log("Error",error)
            }
        }
        products()
    },[])
  return (
   <>
    <h1>Product</h1>
    <div dangerouslySetInnerHTML={{__html : products}}/>
   </>
  )
}

export default products