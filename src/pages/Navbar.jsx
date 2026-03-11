import React from 'react'
import navLogo from '../assets/images/kds logo 1.png'

const Navbar = () => {
  return (
    <nav className='w-full fixed  z-50 bg-white '>
    <div className=' max-w-7xl mx-auto xl:px-3 md:px-30 px-10 flex justify-between items-center py-6'>
          <div className='w-[200px] '>
        <img className=' object-contain' src={navLogo}/>
      </div>

      <a
      className='text-xl font-semibold'
      href='tel:+91 9045301702' 
      >CALL : +91 9045301702</a>
    </div>
    </nav>
  )
}

export default Navbar
