import React from 'react'
import {useCart} from '../../../context/ContextCart'
import Link from 'next/link'
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import FavBtn from '../FavBtn/FavBtn';

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
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-20">
            <img src={product.image} alt="" className="h-full w-full object-cover" />
        </div>
        </Link>
         <Link href={`/product/${product.id}`}>
        <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>
        </Link>
        <p>{product.price}</p>
        <div className="flex justify-between">
        <FavBtn productId={product.id} />

        <AddCartBtn product={product} />
        </div>
      
    </div>
  )
}

export default CardProduct