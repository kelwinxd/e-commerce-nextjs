"use client"
import React, {createContext,ReactNode,useContext, useState} from 'react'

type FavContextType = {
    favorites: number[],
    FavToggle: (id:number) => void;
    IsFav: (id:number) => boolean;
    RemoveFav: (id:number) => void;
}

const FavContext = createContext<FavContextType | null>(null)

export const FavContextProvider = ({children} : {children : ReactNode}) => {
    const [favorites, setFavorites] = useState<number[]>([])

    const FavToggle = (id:number) => {
        setFavorites((prev) => 
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id])
    }

    const IsFav = (id:number) => {
        return favorites.includes(id)
    }

    const RemoveFav = (id:number) => {
        setFavorites((prev) => prev.filter(p => p !== id) )
    }


  return (
    <FavContext.Provider value={{favorites,FavToggle,IsFav, RemoveFav }}>
        {children}
    </FavContext.Provider>

  )
}

export const useFav = () => {

    const contextFav = useContext(FavContext)

    if(!contextFav) throw new Error("undefined context")

    return contextFav
}
