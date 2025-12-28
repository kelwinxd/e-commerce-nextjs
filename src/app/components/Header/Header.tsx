import React from 'react'
import SearchBar from '../Search/SearchBar'
import DropdownMenu from '../Dropdown/DropdownMenu'
import Link from 'next/link'
import CartBtn from '../CartBtn/CartBtn'
import FavIcon from '../FavIcon/FavIcon'



const Header = () => {
  return (
    <header className="w-full bg-orange-400 px-5 py-4 flex flex-col gap-1 sm:gap-4">
        <div className="flex flex-col sm:flex-row  justify-between items-center gap-10">
            <Link href={"/"}><h1 className=" cursor-pointer font-bold text-2xl">TechShop</h1></Link>
            <SearchBar />
            <div className="flex gap-2 items-center mr-4">
                <span><i className="text-2xl fa-solid fa-universal-access"></i></span>
                
                <CartBtn />
                <FavIcon />
                
            </div>
            
        </div>

        {/* Bellow Line */}
        <DropdownMenu />
    </header>
  )
}

export default Header