"use client"
import { useCart } from '@/context/ContextCart'
import Link from 'next/link'
import React from 'react'

const CartBtn = () => {
    const {cart} = useCart()
  return (
    <Link href={'/cart'} className="flex gap-1 relative ">
        <button className="text-2xl  cursor-pointer"><i className="fa-solid fa-cart-shopping"></i>
</button>
        <span className="absolute right-[-40%] bottom-[-20%] bg-white text-orange-500 w-5 h-5 rounded-full flex justify-center">{cart.length}</span>
    </Link>
  )
}

export default CartBtn