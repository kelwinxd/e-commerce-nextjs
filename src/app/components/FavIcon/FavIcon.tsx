"use client"
import React from 'react'
import { useFav } from '@/context/FavContext'
import Link from 'next/link'

const FavIcon = () => {
    const {favorites} = useFav()
  return (
    <Link href={'/favorites'} className="flex gap-1 relative ">
        <button className="text-2xl  cursor-pointer">
            <i className="text-2xl fa-regular fa-heart"></i>
        </button>
        <span 
        className="absolute right-[-40%] bottom-[-20%] bg-white text-orange-500 w-5 h-5 rounded-full flex justify-center">{favorites.length}</span>
    </Link>
  )
}
//text-2xl fa-regular fa-heart
export default FavIcon