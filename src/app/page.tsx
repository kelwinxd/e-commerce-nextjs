"use client"
import React, { useState } from 'react'
import products from '../data/products.json'
import Slider from './components/Slider/Slider'

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};
const Page = () => {
   const [results, setResults] = useState<Product[]>(products)
  return (
    <div className="flex w-full px-[120px] mx-auto gap-3 flex-wrap">
      <Slider />
      {results.length > 0 && 
      <>
      {results.map((p) => (
        <div key={p.title} className="mt-10 border bg-orange-300 w-[400px]">
          <div className="bg-gray-500 w-full h-20"></div>
          <p>{p.title}</p>
          <p>{p.price}</p>

        </div>
      ))}
      </>
      }
    </div>
  )
}

export default Page