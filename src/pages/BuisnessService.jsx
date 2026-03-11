import React from 'react'
import img from "../assets/images/Group 59.png"
const array = [img, img, img, img, img, img, img, img]
const BuisnessService = () => {
    return (
        <section className='max-w-[1720px]   flex flex-col items-center py-20'>
            <h1 className='text-2xl'>Fully Customized <span className='font-bold'>Mobile App Development</span> Services For Your Business</h1>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
                {
                    array.map((item, index) => {

                        const row = Math.floor(index / 3);
                        const posi = index % 3;
                       let gap = ""
                   if (row%2=== 0 && posi===2) {
                            gap="xl:col-span-2"
                        }

                    if (row%2===1 && posi===0) {
                            gap="xl:col-span-2"
                        }

                        return (
                            <div key={index} className={gap}>
                                <img
                                    src={item}
                                    className="w-full h-[250px] object-cover rounded-lg"
                                />
                            </div>
                        )

                    })
                }
            </div>
        </section>
    )
}

export default BuisnessService
