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
        link="https://pmfby.gov.in/"
        color="#ea5353"
        
        />
        <SchemeCard 
        title="Soil Health Card Scheme"
        content="Under this, the govt plans to issue soil cards to farmers which will carry crop-wise recommendations of nutrients and fertilisers required for the individual farms."
        link="https://www.soilhealth.dac.gov.in/"
        color="#45d3d3"
        />
        <SchemeCard 
        title="Mission Organic Chain Development for the North Eastern Region (MOVCDNER)"
        content="To assist the organic producers to tap the market which is growing steadily in the both in domestic and export segments."
        link="https://asfac.assam.gov.in/portlets/mission-organic-value-chain-development-for-north-east-region#:~:text=Mission%20Organic%20Value%20Chain%20Development%20for%20North%20East%20Region%20(MOVCD,%2C%20Assam%2C%20Manipur%2C%20Meghalaya%2C"
        color="#abcff8"
        />
        <SchemeCard 
        title="Neem Coated Urea Scheme"
        content="To boost the growth of wheat and paddy, and reduce the black marketeering and hoarding or urea."
        link="https://www.nationalfertilizers.com/index.php?option=com_content&view=article&id=139&Itemid=158&lang=en"
        color="#fbd199"
        />
        <SchemeCard 
        title="New Jal Shakti Ministry"
        content="To provide piped water connection to every Indian household by the year 2024."
        link="http://jalshakti-dowr.gov.in/"
        color="#abcff8"
        />
        <SchemeCard 
        title="National Programme on Organic Production (NPOP)"
        content="Development of organic value chains in the North East Region of India and promote organic farming."
        linnk="https://apeda.gov.in/apedawebsite/organic/index.htm"
        color="#45d3d3"
        />

        <Footer/>
    </div>
  )
}

export default CropFieldScheme