import React from 'react';

const NavLinks = () => {
    return (
        <>
            <a className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth href="/#about">
                About
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth href="/#services">
                Services
            </a>
            <a className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth href="#contact">
                Contact Us
            </a>
            <a className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth href="#get-demo">
                Demo our products
            </a>
        </>
    )
}

export default NavLinks;