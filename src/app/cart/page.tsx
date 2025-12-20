"use client"
import React from 'react'
import {useCart} from '../../context/ContextCart'
import Link from 'next/link'

const Page = () => {
    const {cart, increaseQt, decreaseQt} = useCart()
  return (
    <div>
        <Link href={"/"}>Voltar</Link>
        {
            cart.map((p) => (
                <div key={p.id}>
                  <p>{p.title}</p> 
                  <div>
                    <span 
                    className="cursor-pointer bg-white text-black p-2" 
                    onClick={() => decreaseQt(p.id)}>-</span>
                    {p.quantity}
                    <span 
                    className="cursor-pointer bg-white text-black p-2" 
                    onClick={() => increaseQt(p.id)}>+</span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Page