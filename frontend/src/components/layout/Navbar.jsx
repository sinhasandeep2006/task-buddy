import React from 'react'
import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import SideMenu from './SideMenu'
const Navbar = ({activeMenu}) => {

    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className='flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px]  px-7 py-4 shadow-md sticky top-0 z-50'>
        <button 
        className='block lg:hidden text-gray-600 hover:text-gray-800 transition-colors duration-300 '
        onClick={() => {setOpenSideMenu(!openSideMenu)}}>
            {openSideMenu ? (<HiOutlineX className='text-2xl' />) : (<HiOutlineMenu className='text-2xl' />)}

        </button>
        <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-1 mb-2">
            <span className="text-3xl">📋</span> TaskBuddy
          </h1>
        {openSideMenu && (
          <div className='fixed top-[61px] -ml-4 bg-white shadow-lg '>
            <SideMenu activeMenu={activeMenu} />
            </div>
        )}
    </div>
  )
}

export default Navbar
