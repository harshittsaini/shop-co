import React from 'react'
import { FaSearch,FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <header className='flexBetween max-pad-container py-3 top-0 w-full z-40'>
        {/* logo */}
        <a href="/" className='bold-24'><span className='bold-36 text-crimsonred'>L</span>uxeStep</a>


            {/* search box */}
        <div className='flexBetween gap-x-5'>
            <div className='flexBetween bg-white py-2 px-3 rounded-full z-50'>
                <input type="search" placeholder='Search...' className='border-none outline-none w-44 hover:w-52 transition-all duration-200'/>
                <div className='bg-white'>
                    <a href="/" className='hover:text-crimsonred'><FaSearch /></a>
                </div>
            </div>

            {/* add to cart */}
            <a href="/" className='flexBetween gap-x-1 bg-crimsonred text-white px-3 py-2 rounded-full w-10 hover:w-20 transition-all duration-200 z-50 group'><span className='regular-16 hidden group-hover:flex'>Cart</span><FaShoppingCart /></a>
        </div>
    </header>
  )
}

export default Header