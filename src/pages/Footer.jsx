import React from 'react'

const Footer = () => {
  return (
    <section className='max-w-[1720px] xl:relative py-10 bg-[#191919] text-[#FFFFFF] flex xl:flex-row md:flex-col gap-7 justify-center items-center mx-auto'>
     <div className=' xl:max-w-[180px] md:max-w-[180px]  max-w-[130px] left-20 xl:top-6    xl:absolute'>
         <img  className='w-full h-full object-contain ' src="https://res.cloudinary.com/dumjuhrob/image/upload/v1773296655/Kds_logo_white_1_kdkn9c.png"/>
     </div>
       <div className='flex gap-3 xl:mt-0  xl:text-lg md:text-lg text-sm'>
        <p className='border-r-1 pr-4'>Privacy Policy </p>
        <p className=' '>Terms of Services</p>
       </div>
    </section>
  )
}

export default Footer
