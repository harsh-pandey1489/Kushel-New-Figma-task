import React from 'react'
const array=[
    {
        head:"Free Cost-Analysis",
        para:"Get free cost-analysis & excellent pieces of advice on your Mobile app development idea from industry experts"
    },
        {
        head:"Super-skilled Developers",
        para:"Experienced developers who are technically competent to handle any level of complex app development projects"
    },
       {
        head:"Beautiful App Designs",
        para:"Our Dedicated in-house design studio helps in creating stunning designs for your business apps"
    },
     {
        head:"Superior Quality",
        para:"Our extensive QA & testing process ensures that the apps are of supreme quality and free from bugs"
    },
     {
        head:"Easy-to-Use Apps",
        para:"We create apps that are exceptionally robust & easy-to-use. Get reliably developed apps for your business"
    },
    {
        head:"Fully Customized Apps",
        para:"Get your apps developed the way you like it. Build apps that are Personalized to your business needs"
    },
      {
        head:"Hand-Holding Approach",
        para:"Get proper industry insights with the right guidance. Let industry experts hand hold you to success"
    },
    {
        head:"24*7 Customer Support",
        para:"Our 24*7 dedicated customer support ensures you get technical assistance whenever necessary"
    }
]
const ChooseUs = () => {
  return (
    <section className='max-w-[1720px] mx-auto bg-[#F5F5F7] flex items-center justify-center flex-col pb-15 '>
     <div className='py-20'>
         <h1 className='text-center mb-4 xl:text-3xl font-bold'>Why Choose Us?</h1>
      <p className='text-center xl:text-2xl max-w-[800px] text-[#101820] font-medium tracking-wide'>Experience A World-Class Mobile App Development Service from Best Mobile App Development Company</p>

     </div>
      <div className='grid  max-w-7xl mx-10 xl:grid-cols-4 md:grid-cols-3 grid-cols-1   gap-10   '>
            {
                array.map((item,index)=>(
                    <div key={index} className='xl:py-10 md:py-6 py-4 px-4 flex flex-col text-[#101820] bg-[#FFFFFF]  border border-transparent transition-colors duration-300 ease-in-out cursor-pointer hover:border-blue-500'>
                          <h1 className='font-semibold mb-4 xl:text-[20px] text-[18px] mt-10'>{item.head}</h1>
                          <p className='xl:text-[20px]'>{item.para}</p>
                    </div>
                ))
            }
      </div>
    </section>
  )
}

export default ChooseUs
