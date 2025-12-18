import React from 'react'
import products from '../../../data/products.json'
import CardProduct from '../CardProduct/CardProduct'

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 justify-center gap-5 mx-auto w-full md:grid-cols-3">
        {products.map((p) => (
            <CardProduct product={p} key={p.id}/>
        ))}
    </div>
  )
}

export default ProductGrid