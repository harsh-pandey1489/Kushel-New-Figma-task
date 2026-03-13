import React from 'react'
import sourceCode from "../assets/images/sourceCode.png";
import  whiteLable from "../assets/images/whiteLable.png";
import  customization from "../assets/images/customization.png";
const Compo1 = () => {
  return (
    <section className='max-w-[1720px] mx-auto bg-white py-20'>
         <div  className='w-full flex flex-wrap mx-auto justify-center items-center gap-10'>
            <div className=' xl:w-[320px]  xl:h-[220px] w-[290px] h-[180px] '>
              <img className='w-full h-full object-contain ' src={customization}/>
            </div>
            <div className='xl:w-[320px]  xl:h-[220px] w-[290px] h-[180px] '>
               <img className='w-full h-full object-contain ' src={whiteLable}/>
            </div>
            <div className='xl:w-[320px]  xl:h-[220px] w-[290px] h-[180px]'>
               <img className='w-full h-full object-contain ' src={sourceCode}/>
            </div>

         </div>
    </section>
  )
}

export default Compo1
