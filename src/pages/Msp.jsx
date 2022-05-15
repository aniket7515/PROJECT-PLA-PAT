import React from 'react'
import Footer from '../componenets/Footer'
import KharifMsp from '../componenets/KharifMsp'
import Navbar from '../componenets/Navbar'

const Msp = () => {
  return (
    <div>
        <Navbar/>
        <h1>Minimum support Prices <span style={{color:"#4dd99a"}}>(MSP)</span> </h1>
        <p className="mb-5">MSP is the guaranteed ‘minimum floor price’ that farmer must get from the government in case the market price of the crops <br/> falls below the MSP. <br/> <strong>Projected Crop:</strong>  Avg amount of money required to produce one quintal of a given crop.</p>

        <KharifMsp/>

        <Footer/>
    </div>
  )
}

export default Msp