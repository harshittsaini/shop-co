import React from 'react'
import { LINKS } from '../constant/data'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className=' top-16 w-full mx-auto z-40 fixed'>
        <ul className='flexCenter bg-white w-[633px] shadow-sm rounded-lg mx-auto gap-x-16'>
            {LINKS.map((link) => (
                <Link
                key={link.title}
                to={link.path}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                activeClass='active'
                className='capitalize py-3 medium-15 cursor-pointer hover:text-crimsonred'
                >

                {link.title}

                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar