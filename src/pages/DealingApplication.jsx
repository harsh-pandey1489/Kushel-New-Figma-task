import React from 'react'
import arrow from '../assets/project/arrow.png'
const DealingApplication = () => {
  return (
     <section className='max-w-[1720px] mx-auto '>
             
              <div className= 'relative px-6 md:px-16  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 bg-gradient-to-b from-[#8942C6] to-[#562176]  items-center justify-center   '>
                <div className='order-2 pb-10 xl:mt-0 mt-14 xl:order-1 grid-2 flex flex-col gap-3 justify-center items-center text-center xl:text-left xl:items-start  leading-9 tracking-wide xl:ml-20  '>
                      <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold '>Dealing Application</h1>
                      <p className='text-[#CCD2D9] text-lg  max-w-[600px] '>A dealing application is a software platform designed to facilitate trading and transactions in financial markets. It provides users with tools for executing buy and sell orders, monitoring market conditions, analyzing financial data, and managing portfolios.</p>
                      <button className='flex gap-2 xl:mt-10 items-center  text-[15px] font-semibold text-white'>
                          View Our Project <span className='w-6 h-6'><img src={arrow} className='object-contain w-full h-full'/></span>
                      </button>
                  </div>
                  <div className='order-1 xl:order-2 relative flex justify-center items-center'>
                     <div className=' absolute  bg-[#FFFFFF]/20  rounded-full top-18 xl:left-[-100pxpx]  w-[350px] h-[350px] md:w-[400px] md:h-[400px] '></div>
                    <div className=' absolute  bg-[#FFFFFF]/30 bg-opacity-[10%] rounded-full top-25 xl:left-[-100pxpx]  w-[300px] h-[300px] md:w-[350px] md:h-[350px] '></div>
                      <div className=' absolute  bg-[#FFFFFF]/50 bg-opacity-[10%] rounded-full top-30 xl:left-[-100pxpx] w-[250px] h-[250px] md:w-[300px] md:h-[300px] '></div>
                      <div className=' relative    w-[240px] md:w-[260px] xl:w-[250px] h-[400px] md:h-[500px] xl:h-[600px]'>
                          <img className='object-contain w-full h-full' src='https://res.cloudinary.com/dumjuhrob/image/upload/v1773216528/Group_5_muflqi.png' />
                      </div>
                  </div>
  
  
                  
  
              </div>
  
          </section>
  )
}

export default DealingApplication
