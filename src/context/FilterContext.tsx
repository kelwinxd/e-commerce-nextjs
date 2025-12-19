"use client"
import React from 'react'
import {useState, useContext, createContext, ReactNode} from 'react'

type FilterType = {
    category: string | null,
    setCategory: (category: string | null) => void;
}

const FilterContext = createContext<FilterType | undefined>(undefined)
export const FilterProvider = ({children} : {children : ReactNode}) => {
    const [category, setCategory] = useState<string | null>(null)
   

  return (
    <FilterContext.Provider value={{category, setCategory}}>
        {children}
    </FilterContext.Provider>
  )
}

export function useFilter(){
    const context = useContext(FilterContext)
    if(!context){
        throw new Error("Doesnt exist context")
    }

    return context;
}