import React from 'react'

const array=[
    {
        star:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773221604/Mask_group_1_kqrjki.png",
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773221699/goodfirms-logo-vector_2_smyhii.png",
        para:"Reviewed by Goodfirms with 4.9/5 ratings based upon client reviews",
        rating:"4.9/5",
        bgimg:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773247884/Award-PNG_1_siar44.png"
    },
    
      {
        star:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773221604/Mask_group_1_kqrjki.png",
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773221967/AppFuturaLogo_1_xlgpe3.png",
        para:"Reviewed by Goodfirms with 4.9/5 ratings based upon client reviews",
        rating:"4.0/5",
         bgimg:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773247884/Award-PNG_1_siar44.png"
    },
        {
        star:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773221604/Mask_group_1_kqrjki.png",
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773222041/upwork-icon-2048x608-o3vqgs7j_2_nkkbth.png",
        para:"Reviewed by Goodfirms with 4.9/5 ratings based upon client reviews",
        rating:"4.6/5",
         bgimg:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773247884/Award-PNG_1_siar44.png"
    },
]

const Award = () => {
  return (
    <section className='max-w-[1720px] mx-auto bg-[#18225A] flex flex-col items-center py-20'>
        <div className='flex flex-col gap-4 justify-center items-center text-white pb-10'>
            <h1 className='text-white text-center xl:text-3xl text-xl font-bold '>An Award-Winning Mobile App Development Company</h1>
            <p className='xl:text-[24px] text-[18px] tracking-wider text-center'>Leverage Our Industry Expertise To Create Delivery Mobile Apps For Your Business</p>
        </div>
      
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mx-20'>
          {array.map((item,index)=>(
            <div key={index} className='relative py-10 p-5  rounded-xl   bg-white'>
              <img className='absolute right-0 top-0 w-36 h-30' src={item.bgimg}/>
               <div className='flex items-center gap-1 text-xl font-[500]'>
                <img src={item.star} className='w-7 h-7'/>
                <p >{item.rating}</p>
               </div>
               <div className='w-[120px] h-14 mb-3'>
                <img src={item.img} className='w-full h-full object-contain'/>
               </div>

               <p className='text-[#3B3B3B] max-w-[220px] text-sm'>{item.para}</p>
            </div>
          ))}
        </div>
   
      
    </section>
  )
}

export default Award
