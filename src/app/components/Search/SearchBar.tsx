"use client"
import React, {useState} from 'react'
import products from '../../../data/products.json'

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};


const SearchBar = () => {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if(value.trim() === ""){
      setResults([])
      return
    }

    const filtered = products.filter((p) => {
      return p.title.toLowerCase().includes(value.toLowerCase())

    })

    setResults(filtered)


  }

  return (
    <div className="relative w-full">
      <input type="text" name="" id="" value={query} onChange={HandleChange} 
      className="w-full rounded-lg bg-white px-4 py-2 outline-orange-400"
      />
      <div className="absolute top-full left-0 bg-white w-full">

    
      {
        results.length > 0 && 
        <>
        {results.map((p) => (
          <p key={p.title} className="text-gray-800 px-4 hover:bg-gray-400 cursor-pointer" >{p.title}</p>
        ))}
        </>
      }

        </div>
    </div>
  )
}

export default SearchBar