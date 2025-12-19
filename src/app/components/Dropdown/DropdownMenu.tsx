"use client"
import React, { useState } from 'react'
import {useFilter} from '../../../context/FilterContext'

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const {setCategory, category} = useFilter()

  const categories = [
  { label: "Todos", value: null },
  { label: "PC Gamer", value: "pcgamer" },
  { label: "Hardware", value: "hardware" },
];

  

  return (
    <nav className="relative">
      <button className="cursor-pointer"
       onMouseEnter={() => setOpen(!open)} 
       
       onClick={() => setOpen(!open)}
       
       >
        Departamentos
      </button>
      {open && 
      <nav onMouseLeave={() => setOpen(!open)}
      
      className="absolute left-0 w-[300px] bg-orange-400 z-20  flex flex-col items-start">
        {categories.map((b) => (
          <button 
          key={b.label}
          onClick={() => setCategory(b.value)}
              className={`w-full text-left p-1.5 cursor-pointer hover:bg-orange-300
        ${category === b.value
        ? "bg-orange-300 text-white"
        : "bg-orange-400"}
    `}

          >
              {b.label}
          </button>
        ))}
      </nav>}
    </nav>
  )
}

export default DropdownMenu