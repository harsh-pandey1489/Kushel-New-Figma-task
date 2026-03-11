import React from 'react'
const array=[
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773225832/Mask_group_2_isggdp.png",
        para:"Multiple Payment"
    },
     {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773226009/Mask_group_3_rhllrx.png",
        para:"Advanced Analytics"
    },
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773226051/Mask_group_4_ejcdyy.png",
        para:"Mobile Friendly"
    },
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773226122/Mask_group_5_jeiegc.png",
        para:"Multi- Language"
    }, 
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773227540/Mask_group_7_m2ldeg.png",
        para:"Discount & Promo"
    },
       {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773227641/Mask_group_8_ja26oi.png",
        para:"Reviews & Rating"
    },
      {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773227725/Mask_group_9_oqbih5.png",
        para:"Geo - Location"
    },
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773227790/notification_1_bzrbms.png",
        para:"Push Notification"
    },
    {
        img:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773227864/chat_1_f2c0dt.png",
        para:"Integrated Chat System"
    }



]
const Feature = () => {
  return (
   <section className='max-w-[1720px] mx-auto flex flex-col items-center py-10 text-[#333333]'>
        <div className='flex flex-col gap-4 justify-center items-center pb-10'>
            <h1 className=' text-center xl:text-[28px] text-xl font-bold '>A Complete Feature-Suite to Build Your Custom Mobile Apps</h1>
            <p className='xl:text-[22px] font-[500] text-[18px] text-center'>We offer end-to-end features to drive engagement & revenue for your brand</p>
        </div>
      
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mx-20'>
         {array.map((item,index)=>(
            <div key={index} className={`flex flex-col ${index==0?"bg-[#3D8BF5] text-white":""} hover:text-white items-center justify-center rounded hover:bg-[#3D8BF5] border border-blue-400 px-4 py-14 `}>
         
                     <img className='w-15 h-15  ' src={item.img}/>
      
                  <p className='mt-4 text-lg' >{item.para}</p>
            </div>
         ))}
        </div>
   
      
    </section>
  )
}

export default Feature
