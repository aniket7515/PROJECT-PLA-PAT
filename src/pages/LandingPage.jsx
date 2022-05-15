import React from 'react'
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
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default LandingPage