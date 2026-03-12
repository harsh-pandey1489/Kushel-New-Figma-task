import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Compo1 from './component/Compo1'
import Compo2 from './component/Compo2'
import Compo3 from './component/Compo3'
import WebApplication from './pages/WebApplication'
import DealingApplication from './pages/DealingApplication'
import Award from './pages/Award'
import Compo4 from './component/Compo4'
import Feature from './pages/Feature'
import BuisnessService from './pages/BuisnessService'
import Compo5 from './component/Compo5'
import ChooseUs from './pages/ChooseUs'
import Compo6 from './component/Compo6'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <div className="pt-[60px] overflow-x-hidden ">\
        <Hero />
        <Services />
        <Compo1 />

        <Compo2 />
        <BuisnessService />
        <Compo3 />
        <WebApplication />
        <DealingApplication />
        <Award />
        <Compo4 />
        <Feature />
        <Compo5/>
        <ChooseUs/>
        <Compo6/>
        <Footer/>

      </div>

    </div>
  )
}

export default App
