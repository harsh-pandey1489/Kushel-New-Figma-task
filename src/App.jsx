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

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className="pt-[88px] overflow-x-hidden ">\
        <Hero/>
      <Services/>
      <Compo1/>
     
      <Compo2/>
      <Compo3/>
      <WebApplication/>
      <DealingApplication/>
      <Award/>
      <Compo4/>
      <Feature/>
        <BuisnessService/>
     
      </div>
    
    </div>
  )
}

export default App
