import React from 'react'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'
import SchemeCard from "../componenets/SchemeCard"

const FinancialSchemes = () => {
  return (
    <div>
        <Navbar/>
        <h2>Financial Scheme</h2>
        <SchemeCard 
        title="PM-Kisan Samman Nidhi Yojana"
        content="Farmers with less than two hectares of landholding will get up to Rs. 6,000 per year as a minimum income support."
        link="https://www.pmkisan.gov.in/"
        
        />
        <SchemeCard 
        title="Pradhan Mantri Kisan Maandhan Yojana(PMKMY)"
        content="Marginalised farmers will get a minimum pension of Rs 3000 / month on attaining the age of 60 years."
        link="https://maandhan.in/auth/login"
        />
        <SchemeCard 
        title="Jan Dhan Yojana"
        content="This scheme ensures access to financial services, namely, a basic savings & deposit accounts, remittance, credit, insurance, pension in an affordable manner."
        link="https://pmjdy.gov.in/"
        />
        <SchemeCard 
        title="Paramparagat Krishi Vikas Yojana (PKVY)"
        content="Financial aid of Rs. 50,000 per hectare/ three years is allowed, out of which Rs. 31,000 (61 percent) is given to the farmer directly."
        link="https://pgsindia-ncof.gov.in/pkvy/index.aspx"
        />

        <Footer/>
    </div>
  )
}

export default FinancialSchemes