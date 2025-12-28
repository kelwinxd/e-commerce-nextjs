"use client"
import { useFav } from '@/context/FavContext'
import React from 'react'
import products from "../../data/products.json"
import { useCart } from '@/context/ContextCart'
import Link from 'next/link'
import AddCartBtn from '../components/AddCartBtn/AddCartBtn'


const Page = () => {
    const {favorites, RemoveFav} = useFav()
    const {addtoCart} = useCart()

    const favList = products.filter((p) => favorites.includes(p.id))
  
    return (
    <div className="w-full mx-auto flex flex-col gap-4 py-5 px-3 md:px-[104px] ">
        {favList.map((i) => (
        <p key={i.id} className="flex justify-between gap-5 items-center py-4 border-b border-b-gray-500">{i.title}
        <div className="flex gap-4">
            
        <Link href="/cart"><AddCartBtn product={i} text="Add" /></Link>
        
        <button className="bg-red-500 p-2" onClick={() => RemoveFav(i.id)}>X</button>
        </div>
        </p>
        ))}
    </div>
  )
}

export default Page