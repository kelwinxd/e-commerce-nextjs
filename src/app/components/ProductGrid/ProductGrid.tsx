import React from 'react'
import products from '../../../data/products.json'
import CardProduct from '../CardProduct/CardProduct'
import {useFilter} from '../../../context/FilterContext'


const ProductGrid = () => {
  const {category} = useFilter();
  const filteredProducts = products.filter((p) => p.category === category)
  const productList = category ? filteredProducts : products
  return (
    <div className="grid grid-cols-2 justify-center gap-5 mx-auto w-full md:grid-cols-3">
        {productList.map((p) => (
            <CardProduct product={p} key={p.id}/>
        ))}
    </div>
  )
}

export default ProductGrid