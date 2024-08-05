import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import navitems from '../constants/navigation';
import logo from '../assets/logo.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = () => {
        setIsOpen(false)
    }

return (
    <div className='lg:pb-28 pb-20'>
        <nav className="fixed top-0 w-full z-50">
            <div className="mx-auto flex justify-center items-center">
                <div className="bg-white drop-shadow-sm lg:px-10 px-3 py-2 flex justify-between items-center w-full">
                    <NavLink to='/' className="text-white font-bold text-xl"><img src={logo} alt="logo-img" className='lg:h-16 h-12' /></NavLink>
                    <div className="hidden md:flex space-x-20 text-zinc-700">
                        {
                            navitems.map((navitem) => {
                                return (
                                    <NavLink
                                        to={navitem.href}
                                        key={navitem.label}
                                        className={({ isActive }) => `${isActive && 'font-bold text-purple-color'}`}>
                                        {navitem.label}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-700 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-purple-color text-white flex flex-col items-center space-y-4 py-5">
                    {
                        navitems.map((navitem) => {
                            return (
                                <NavLink
                                    onClick={handleNavLinkClick}
                                    to={navitem.href}
                                    key={navitem.label}
                                    className={({ isActive }) => `hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-l hover:from-[#E5C1FF]/90 hover:to-[#8B6FE1]/40 ${isActive && 'font-bold'}`}>
                                    {navitem.label}
                                </NavLink>
                            )
                        })
                    }
                </div>
            )}
        </nav>
    </div>
    );
}

export default Header