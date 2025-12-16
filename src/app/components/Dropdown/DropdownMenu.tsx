"use client"
import React, { useState } from 'react'

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative">
      <button className="cursor-pointer"
       onMouseEnter={() => setOpen(!open)} 
       
       onClick={() => setOpen(!open)}
       
       >
        Departamentos
      </button>
      {open && 
      <ul onMouseLeave={() => setOpen(!open)}>
        <li>PC</li>
        <li>Notebook</li>
      </ul>}
    </nav>
  )
}

export default DropdownMenu