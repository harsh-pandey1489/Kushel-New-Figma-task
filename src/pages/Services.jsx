import React from 'react'
import cloud from '../assets/service-image/cloud-computing.png'
import apple from '../assets/service-image/apple (1).png'
import android from '../assets/service-image/android.png'
import app from '../assets/service-image/app-development.png'
const service = [
  {
    logo: apple,
    head:"iOS ",
    para: "App Development",
    color:"border-black"
  },
  {
    logo: android,
      head:"Android",
    para: " App Development",
    color:"border-green-500"
  },
  {
    logo: app,
    head:"Web",
    para: " App Development",
     color:"border-blue-500"
  },
  {
    logo: cloud,
    head:"Hybrid-Native",
    para: " App Development",
    color:"border-blue-300"
  }

]
const Services = () => {
  return (
    <section className=' max-w-[1720px] text-center  mx-auto pb-10 bg-[#D9D9D9]/30'>

      <div className='w-full xl:pt-60 pt-140  '>
        <div className='w-full items-center flex justify-center'>
          <h1 className='font-semibold xl:text-3xl leading-10 max-w-[500px]'>
          Vast Mobile App Development
          <span className='font-[800] '> Services We Offer</span>
        </h1>
        </div>

        <div className=' w-full flex flex-wrap xl:mx-0 mx-auto  gap-9 justify-center items-center mt-10 '>
          {
            service.map((item,index) => (
              <div key={index} className={`${item.color} border-2 text-xl bg-[#FFFFFF] flex flex-col rounded-2xl items-center justify-center w-[200px] h-[200px] px-3 py-10 `}>
                <div className='w-[60px] h-[60px] flex items-center justify-center items-center'>
                  <img className='w-full h-full object-contain' src={item.logo} />
                </div>
                <p className='w-[140px] pt-5'><span className='font-semibold'>{item.head}</span>{item.para}</p>
              </div>

            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Services
