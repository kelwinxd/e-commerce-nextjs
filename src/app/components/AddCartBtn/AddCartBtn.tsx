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

type AddCartBtnProps = {
  product: Product;
  text?: string;
};



const AddCartBtn = ({product, text = "Adicionar"} : AddCartBtnProps) => {
    const {addtoCart} = useCart()
  
    return (
     <button 
        onClick={() => addtoCart(
            {id:product.id,
            title:product.title,
             price: product.price, 
             quantity: 1, 
             image: product.image})}
             className="cursor-pointer hover:text-orange-400 border p-2 rounded-2xl"
             >
                {text}
            </button>
  )
}

export default AddCartBtn