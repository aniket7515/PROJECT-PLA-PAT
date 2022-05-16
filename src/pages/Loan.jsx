import React from 'react'
import Footer from '../componenets/Footer'
import LoanType from '../componenets/LoanType'
import Navbar from '../componenets/Navbar'

const Loan = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <h1>Agricultural Loans in India</h1>
        <p>Agriculture is the backbone of Indian economy and it definitely comes as no surprise to see financial institutions offer monetary aid to farmers all across the country. Agricultural loans are available for different kinds of farming-related activities.</p>

        <h1>Types of Agricultural Loans in India</h1>
        <p>One can avail a loan for the following activities related to agriculture:</p>

        </div>
        
        {/* <ul>
            <li>Running day to day operations</li>
            <li>Buying farm machinery such as tractors, harvesters, et cetera</li>
            <li>Purchasing land</li>
            <li>Storage purposes</li>
            <li>Product marketing loans</li>
            <li>Expansion</li>
        </ul> */}
        <LoanType/>

        <h3>For More INFO: <a href="https://www.bankbazaar.com/home-loan/types-of-agricultural-loans-in-india.html">VISIT SITE</a> </h3>

        <Footer/>

    </div>
  )
}

export default Loan