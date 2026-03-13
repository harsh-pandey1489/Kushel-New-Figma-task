import React, { useState } from 'react'
import navLogo from '../assets/images/kds-logo.png'
import { FiMenu, FiX } from "react-icons/fi";
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='w-full fixed  z-50 bg-white '>
      <div className=' max-w-7xl mx-auto xl:px-3 md:px-30 px-10 flex justify-between items-center py-3'>
        <div className='w-[200px] '>
          <img className=' object-contain' src={navLogo} />
        </div>

        <a
          className='hidden md:block text-xl font-semibold'
          href='tel:+91 9045301702'
        >CALL : +91 9045301702</a>


        <button
          className="md:hidden cursor-pointer text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


        {menuOpen && (
          <div className="  absolute top-full left-0 w-full bg-white shadow-md md:hidden ">
            <div className="flex flex-col justify-center items-center gap-4 p-9">
              <a
                className='xl:text-xl text-lg font-semibold'
                href='tel:+91 9045301702'
              >CALL : +91 9045301702</a>


            </div>
          </div>
        )}

      </div>


    </nav>
  )
}

export default Navbar
