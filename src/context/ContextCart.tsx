"use client"

import {createContext, useState, ReactNode, useContext} from 'react'

type CartItem = {
    id:number,
    title:string,
    quantity: number,
    price:number,
    image:string
}

type CartContextType = {
    cart: CartItem[],
    addtoCart: (item: CartItem) => void,
    removeFromCart: (id: number) => void,
    increaseQt: (id:number) => void,
    decreaseQt: (id:number) => void

}

const ContextCart = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({children}: {children:ReactNode}) => {
    
    const [cart,setCart] = useState<CartItem[]>([]);

    const addtoCart = (product: CartItem) => {
    setCart((prev) => {
    const exists = prev.find((p) => p.id === product.id);

    if (exists) {
      return prev.map((p) =>
        p.id === exists.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
}
    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((p) => p.id !== id))
    }

    const increaseQt = (id: number) => {
        setCart((prev) => 
            prev.map((p) => p.id === id ? {...p, quantity: p.quantity + 1} : p))
    }

    const decreaseQt = (id: number) => {
        setCart((prev) => 
            prev.map((p) => p.id === id ? {...p, quantity: p.quantity - 1} : p)
        .filter((p) => p.quantity > 0))
        
    }


    return (
        <ContextCart.Provider value={{cart,addtoCart, removeFromCart, increaseQt,decreaseQt }} >
            {children}
        </ContextCart.Provider>
    )
}

export const useCart = () => {
    const context = useContext(ContextCart)
     if(!context){
        throw new Error("undefined context");    
     }

     return context

}
