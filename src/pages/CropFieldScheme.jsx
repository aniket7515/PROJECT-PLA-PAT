import React from 'react'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'
import SchemeCard from '../componenets/SchemeCard'

const CropFieldScheme = () => {
  return (
    <div>
        <Navbar/>
        <h2>Crop Scheme</h2>

        <SchemeCard 
        title="Pradhan Mantri Krishi Sinchai Yojana (PMKSY)"
        content="Focuses on creating sources for assured irrigation, also creating protective irrigation by harnessing rain water."
        
        />
        <SchemeCard 
        title="Soil Health Card Scheme"
        content="Under this, the govt plans to issue soil cards to farmers which will carry crop-wise recommendations of nutrients and fertilisers required for the individual farms."
        />
        <SchemeCard 
        title="Mission Organic Chain Development for the North Eastern Region (MOVCDNER)"
        content="To assist the organic producers to tap the market which is growing steadily in the both in domestic and export segments."
        />
        <SchemeCard 
        title="Neem Coated Urea Scheme"
        content="To boost the growth of wheat and paddy, and reduce the black marketeering and hoarding or urea."
        />
        <SchemeCard 
        title="New Jal Shakti Ministry"
        content="To provide piped water connection to every Indian household by the year 2024."
        />
        <SchemeCard 
        title="National Programme on Organic Production (NPOP)"
        content="Development of organic value chains in the North East Region of India and promote organic farming."
        />

        <Footer/>
    </div>
  )
}

export default CropFieldScheme