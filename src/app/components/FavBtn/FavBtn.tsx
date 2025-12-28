"use client"
import { useFav } from '@/context/FavContext'
import React from 'react'

const FavBtn = ({productId} : {productId : number}) => {
    const {FavToggle, IsFav} = useFav()

  return (
     <button  
     title='Favoritar' 
     className={`cursor-pointer text-xl transition ${IsFav(productId) ? "text-red-500" : "text-white"}`}
     onClick={() => FavToggle(productId)}
     >
    ❤
  </button>
  )
}

export default FavBtn