import React from 'react'
import Footer from '../componenets/Footer'
import Navbar from '../componenets/Navbar'
import donot1 from '../componenets/Images/donot1.PNG'
import donot2 from '../componenets/Images/donot2.PNG'
import donot3 from '../componenets/Images/donot3.PNG'
// import donot4 from '../componenets/Images/donot4.PNG'
import donot5 from '../componenets/Images/donot5.PNG'
import donot6 from '../componenets/Images/donot6.PNG'
import donot7 from '../componenets/Images/donot7.PNG'

const UseofPesticides = () => {
  return (
    <div>
        <Navbar/>
        <div >
        <div>
            <h1>Instructions for Safe use of Pesticides</h1>
        </div>
        <div >
            <img src={donot1} alt="" />
            <img src={donot2} alt="" />
            <img src={donot3} alt="" />
            {/* <img src={donot4} alt="" /> */}
            <img src={donot5} alt="" />
            <img src={donot6} alt="" />
            <img src={donot7} alt="" />
            

        </div>


        </div>
        
        <Footer/>
    </div>
  )
}

export default UseofPesticides