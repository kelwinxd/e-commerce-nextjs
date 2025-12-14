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
    <div>
      <input type="text" name="" id="" value={query} onChange={HandleChange} />
      {
        results.length > 0 && 
        <>
        {results.map((p) => (
          <p key={p.title}>{p.title}</p>
        ))}
        </>
      }
    </div>
  )
}

export default SearchBar