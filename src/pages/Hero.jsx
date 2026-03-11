import React from "react";
import heroimg from "../assets/images/hero-image.jpg";
import indimg from "../assets/images/ind.png";

const Hero = () => {
  return (
    <section className="relative w-full max-w-[1720px] mx-auto h-[500px] ">
    
      <img
        src={heroimg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#2C3D9B]/80"></div>


 <div className="relative  flex flex-col xl:flex-row  justify-between items-center px-6 xl:px-30 ">

        <div className="text-[#FFFFFF] xl:pb-30 pt-20   ">
          <h1 className="xl:text-4xl max-w-[500px] text-3xl font-bold leading-tight">
          <span className="font-[300]">  Experience A World-Class</span> <br />
            Mobile App Development Service
          </h1>

          <p className="mt-6 xl:text-2xl max-w-[500px] text-[#FFFFFF]">
            Build Affordable, Easy-to-use & Feature Rich Mobile Apps
            For Your Business
          </p>

          <button className="mt-8 text-left bg-white text-xl text-black xl:px-8 xl:py-3 px-5 py-3 rounded-full font-semibold">
            Book a Demo
          </button>
        </div>

        <div className="bg-[#FFFFFF] xl:w-[540px] md:w-[450px] xl:ml-20 p-10 rounded-xl  xl:translate-y-15 translate-y-20">
      <h2 className="text-2xl text-center font-[500] mb-6">
        Let’s Build Your <span className="font-bold">Dream App!</span>
      </h2>

      <form className="flex flex-col gap-10">
        <input placeholder="First Name" className="border-gray-400 border-b placeholder-gray-400 placeholder:font-semibold py-2 outline-none"/>
        <input placeholder="Email" className="border-b border-gray-400 placeholder-gray-400 placeholder:font-semibold py-2 outline-none"/>
        <div className="flex border-gray-400  border-b ">
          <div className="flex items-center " >
            <img className="w-5 h-5" src={indimg}/>
            <select className="outline-none">
              <option></option>
              <option></option>
            </select>
          </div>

           <input placeholder="Phone" className="placeholder-gray-400 placeholder:font-semibold py-2 w-full p-2 outline-none"/>
        </div>
        <textarea 
        rows={4}
        placeholder="What’s your Project about?"
        
        className="border-b border-gray-400 py-2 placeholder-gray-400 placeholder:font-semibold outline-none"/>

        <div>
          <button className="bg-[#3666FD] cursor-pointer  text-white py-3 p-9 font-semibold text-[#FFFFFF] rounded-full">
          SUBMIT
        </button>
        </div>
      </form>
    </div>
     

       

      </div>
    </section>
  );
};

export default Hero;