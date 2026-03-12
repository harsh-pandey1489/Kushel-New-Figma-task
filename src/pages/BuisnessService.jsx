import React from 'react'
import img from "../assets/images/Group 59.png"

const array = [
    {
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773246336/Group_29_j1i832.png",
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773246441/Rectangle_11_m9u2er.png",
        para:"On-Demand App Solution"
    },
     {
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300534/Rectangle_19_ayy3ew.png",
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299328/Group_31_vi4rcb.png",
        para:"Ecommerce & Marketplace Solution"
    },
     {
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299444/Group_34_b3okvb.png",
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299493/Rectangle_13_nrbsxg.png",
        para:"Food & Beverage Solution "
    },
     {
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299590/Group_36_akm1ks.png",
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299644/Rectangle_14_f892xj.png",
        para:" Pickup & Delivery Solution"
    },
     {
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299690/Group_38_fembmg.png",
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299733/Rectangle_15_bilkqy.png",
        para:"Blockchain Development "
    },
     {
        logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299826/Group_40_qugz21.png",
        image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299903/Rectangle_16_fhevmw.png",
        para:"Internet of Things (IOT) "
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773299954/Group_42_wz8ion.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300299/Rectangle_17_esxb42.png",
      para:"Social Networking Solution "
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300342/Group_44_lthkgk.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300446/Rectangle_18_fpidbn.png",
      para:" Healthcare & Medical Solution "
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300497/Group_66_etavdj.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300534/Rectangle_19_ayy3ew.png",
      para:" Laundry & Home Services"
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300593/Group_47_g4ocia.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300635/Rectangle_22_ih36kh.png"
      ,para:" Transportation Solution"
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300678/Group_49_f1mgmz.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300721/Rectangle_20_hzrwdg.png",
      para:"Real Estate Solution"
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300767/Group_51_p8wvnm.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300775/Rectangle_21_igpn9a.png",
      para:" Banking & Finance "
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300852/Group_53_jbnxqi.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773300888/Rectangle_23_k2z1lt.png",
      para:"  Education & Learning"
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773301296/Group_55_bw5abc.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773301325/Rectangle_24_gmrsc3.png",
      para:"Manufacturing Business Solution"
    },
    {
      logo:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773301394/Group_57_q7xk3s.png",
      image:"https://res.cloudinary.com/dumjuhrob/image/upload/v1773301430/Rectangle_25_yjpkis.png",
      para:"Enterprise Mobility Solution"
    }

]

const BuisnessService = () => {

  return (
    <section className='max-w-[1720px] mx-auto flex flex-col  items-center py-20'>

      <h1 className='xl:text-3xl mb-10 font-semibold  max-w-[790px] text-center'>
        Fully Customized <span className='font-bold'>Mobile App Development</span> Services For Your Business
      </h1>

      <div className='grid grid-cols-2 sm:col-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:mx-50 mx-10 '>

        {array.map((item,index)=>{

          const row =Math.floor(index/3)
          const pos =index % 3

          let span="xl:col-span-1"

          if(row%2===0 && pos===2){
            span = "xl:col-span-2"
          }

          if(row%2===1 && pos===0){
            span = "xl:col-span-2"
          }

          return(
            <div key={index} className={`relative ${span} rounded-lg overflow-hidden`}>

  <img 
    src={item.image}
    className="w-full xl:h-[234px] md:h-[200px] h-[130px] object-cover"
  />

  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30">
      <img src={item.logo} className="xl:w-15 xl:h-15 w-10 mb-auto top-0  " />
      <h1 className="text-white xl:text-xl md:text-lg text-[10px] xl:max-w-[200px] font-semibold">{item.para}</h1>
  </div>

</div>
          )

        })}

      </div>

    </section>
  )
}

export default BuisnessService