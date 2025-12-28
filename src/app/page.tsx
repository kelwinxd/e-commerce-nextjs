"use client"
import React, { useState } from 'react'
import products from '../data/products.json'
import Slider from './components/Slider/Slider'
import ProductGrid from './components/ProductGrid/ProductGrid'

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
    <div className="flex w-full px-3 md:px-[104px] mx-auto gap-3 flex-wrap">
      <Slider />
      
      <ProductGrid />
    </div>
  )
}

export default Page