"use client"
import React from 'react'
import {useCart} from '../../../context/ContextCart'

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};


const AddCartBtn = ({product} : {product : Product}) => {
    const {addtoCart} = useCart()
  
    return (
     <button 
        onClick={() => addtoCart(
            {id:product.id,
            title:product.title,
             price: product.price, 
             quantity: 1, 
             image: product.image})}
             className="cursor-pointer hover:text-orange-400"
             >
                Adicionar
            </button>
  )
}

export default AddCartBtn