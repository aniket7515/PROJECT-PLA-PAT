import React from 'react'
// import Acc from '../componenets/Acc'
import ContactUs from '../componenets/ContactUs'
import Footer from '../componenets/Footer'
import Header from '../componenets/Header'
import Navbar from '../componenets/Navbar'
import Services from '../componenets/Services'

const LandingPage = () => {
  return (
    <div>
        
        {/* <h1>Landing page</h1> */}
        <Navbar/>
        <Header/>
        <Services/>
        {/* <Acc/> */}
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default LandingPage