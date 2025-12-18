import React from 'react'
import {useCart} from '../../../context/ContextCart'

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};

const CardProduct = ({product} : {product:Product}) => {
    const {addtoCart} = useCart()
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-3 hover:shadow-lg transition">
        <div className="relative w-full h-20">
            <img src={product.image} alt="" className="h-full w-full object-cover" />
        </div>
        
        <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>
        <p>{product.price}</p>
        <button 
        onClick={() => addtoCart(
            {id:product.id,
            title:product.title,
             price: product.price, 
             quantity: 1, 
             image: product.image})}>
                Adicionar
            </button>
    </div>
  )
}

export default CardProduct