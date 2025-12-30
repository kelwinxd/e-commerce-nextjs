"use client"
import { usePathname } from 'next/navigation'
import products from "@/data/products.json";
import React from 'react'
import Link from 'next/link';

export default function BreadCrumb() {
  const pathname = usePathname()

  const id = pathname.split("/").pop()

  const product = products.find((p) => p.id === Number(id))
  return (
    <>
    
    {product && (
        <nav 
        className="px-3 py-3 md:px-[104px]">
            <span className="font-semibold text-gray-600">You are here: </span>
            <Link href="/" className=" hover:text-orange-500">{product?.category}</Link>
             {" >"} <span className="text-orange-500">{product?.title}</span> 
            </nav>
    )}
    
   
    </>
  )
}

