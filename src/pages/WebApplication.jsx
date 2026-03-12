import React from 'react'
import mobile1 from '../assets/project/mobile1.png'
import arrow from '../assets/project/arrow.png'
const WebApplication = () => {
    return (
        <section className='max-w-[1720px] mx-auto '>
            <div className='py-12 font-[500] bg-white flex justify-center items-center'>
                <h1 className='text-3xl'>
                    Portfolio
                </h1>
            </div>
            <div className= 'relative px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 bg-[#24204E]  items-center justify-center  '>
                <div className='relative flex justify-center items-center'>
                    <div className=' absolute  bg-[#FFFFFF]/5 rounded-full top-20 xl:left-[-100pxpx] xl:w-[450px] xl:h-[450px] w-[300px] h-[300px] md:w-[350px] md:h-[350px] '></div>
                    <div className=' relative    w-[240px] md:w-[260px] xl:w-[340px] h-[400px] md:h-[500px] xl:h-[600px]'>
                        <img className='object-contain w-full h-full' src={mobile1} />
                    </div>
                </div>


                <div className='flex flex-col gap-3 justify-center items-center text-center md:text-left xl:items-start  leading-10 tracking-wide '>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold mb-2'>Web Application</h1>
                    <p className='text-[#CCD2D9] xl:text-left text-center text-xl  max-w-[650px] '>Crypto apps are mobile or web applications designed to facilitate various activities related to cryptocurrencies. These apps allow users to buy, sell, trade, and manage their digital assets securely. Features often include real-time price tracking.</p>
                    <button className='flex gap-2 xl:text-left text-center xl:mt-10 items-center  text-[15px] font-semibold text-white'>
                        View Our Project <span className='w-6 h-6'><img src={arrow} className='object-contain w-full h-full'/></span>
                    </button>
                </div>

            </div>

        </section>
    )
}

export default WebApplication
