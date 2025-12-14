import React from 'react'
import SearchBar from '../Search/SearchBar'
import DropdownMenu from '../Dropdown/DropdownMenu'


const Header = () => {
  return (
    <header>
        <div className="flex gap-4">
            <h1>TechShop</h1>
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