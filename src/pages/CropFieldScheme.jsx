import React from 'react'
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
        title="Pradhan Mantri Kisan Maandhan Yojana(PMKMY)"
        content="Marginalised farmers will get a minimum pension of Rs 3000 / month on attaining the age of 60 years."
        />
        <SchemeCard 
        title="Jan Dhan Yojana"
        content="This scheme ensures access to financial services, namely, a basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner."
        />
        <SchemeCard 
        title="Paramparagat Krishi Vikas Yojana (PKVY)"
        content="Financial aid of Rs. 50,000 per hectare/ three years is allowed, out of which Rs. 31,000 (61 percent) is given to the farmer directly."
        />
    </div>
  )
}

export default CropFieldScheme