"use client"
import React, { useState } from 'react'


const banners = [
    "banners/banner1.png",
    "banners/banner2.png",
    "banners/banner3.png"
]
const Slider = () => {
    const [index, setIndex] = useState(0);
    
    const next = () => {
        setIndex((index + 1) % banners.length )
    }

    const prev = () => {
        setIndex((index - 1 + banners.length) % banners.length )
    }

  return (
    <div className="w-full h-84 overflow-hidden relative mt-4">
        <img src={banners[index]} alt="" className="w-full h-full object-cover object-center" />
        
        
        <button onClick={prev} 
        className="absolute left-2 top-1/2 text-4xl z-10 cursor-pointer">⇐</button>
        <button onClick={next} 
        className="absolute right-2 top-1/2 text-4xl z-10 cursor-pointer">⇒</button>
    </div>
  )
}

export default Slider