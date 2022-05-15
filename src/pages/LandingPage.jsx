import React from 'react'
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
        <Footer/>

    </div>
  )
}

export default LandingPage