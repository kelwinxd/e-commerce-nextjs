import React from 'react'
import SearchBar from '../Search/SearchBar'
import DropdownMenu from '../Dropdown/DropdownMenu'


const Header = () => {
  return (
    <header className="w-full bg-orange-400 px-5 py-4 flex flex-col gap-1 sm:gap-4">
        <div className="flex flex-col sm:flex-row  justify-between items-center gap-10">
            <h1 className="font-bold text-2xl">TechShop</h1>
            <SearchBar />
            <div>
                <span>1</span>
                <span>1</span>
                <span>1</span>
            </div>
        </div>

        {/* Bellow Line */}
        <DropdownMenu />
    </header>
  )
}

export default Header