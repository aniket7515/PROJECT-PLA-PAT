import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from "../componenets/Footer"
import sustainableagri from '../componenets/Images/sustainable.png'

const SustainabaleAgri = () => {
  return (
    <div>
        <Navbar/>
        <h1>Key Highlights</h1>
        <div className="container" style={{textAlign: 'left'}}>
        <p><li>Sustainable agriculture offers a much-needed alternative to conventional input-intensive agriculture, the long-term impacts of which include degrading topsoil, declining groundwater levels and reduced biodiversity. It is vital to ensure India’s nutrition security in a climate-constrained world.</li></p>
        <p><li>While various definitions of sustainable agriculture exist, this study uses agroecology as a lens of investigation. This term broadly refers to less resource-intensive farming solutions, greater diversity in crops and livestock, and farmers’ ability to adapt to local circumstances.</li></p>
        <p><li>Sustainable agriculture is far from mainstream in India, with only 5 (crop rotation; agroforestry; rainwater harvesting; mulching and precision) SAPSs scaling beyond 5 per cent of the net sown area.</li></p>
        <p><li>Most SAPSs are being adopted by less than five million (or four per cent) of all Indian farmers. Many are practised by less than one per cent.</li></p>
        <p><li>Crop rotation is the most popular SAPS in India, covering around 30 million hectares (Mha) of land and approximately 15 million farmers. Agroforestry, mainly popular among large cultivators, and rainwater harvesting have relatively high coverage - 25 Mha and 20-27 Mha, respectively.</li></p>
        <p><li>Organic farming currently covers only 2.8 Mha — or two per cent of India’s net sown area of 140 Mha. Natural farming is the fastest growing sustainable agricultural practice in India and has been adopted by around 800,000 farmers. Integrated Pest Management (IPM) has achieved a coverage area of 5 Mha after decades of sustained promotion.</li></p>

        </div>
        <div>
          <img src={sustainableagri} alt="" />

        </div>

        <div className="container" style={{textAlign: 'left'}}>
        <p><li>Agroforestry and system of rice intensification (SRI) are the most popular among researchers studying the impact of SAPSs on economic, environmental, and social outcomes. Evidence for the impact of practices such as biodynamic agriculture, permaculture and floating farming are either very limited or non-existent.</li></p>
        <p><li>The existing literature critically lacks long-term assessments of SAPSs across all three sustainability dimensions (economic, environmental and social). Other research limitations include a research gap concerning landscape, regional or agroecological-zone level assessments and a relative lack of focus on evaluation criteria such as biodiversity, health and gender.</li></p>
        <p><li>The budget outlay for the National Mission for Sustainable Agriculture (NMSA) is only 0.8 per cent of the Ministry of Agriculture and Farmers’ Welfare’s total budget - INR 142,000 crore (excluding INR 71,309 crore spent annually on fertiliser subsidies by the Centre).</li></p>
        <p><li>Eight of the 16 practices identified by the study receive some budgetary support under various central government schemes. Of these, organic farming has received the most policy attention as Indian states, too, have formulated exclusive organic farming policies. </li></p>
        <p><li>Most Civil Society Organisations (CSOs) involved in SAPSs were active in Maharashtra, Rajasthan and Madhya Pradesh. Organic farming, natural farming and vermicomposting get the most interest from CSOs.</li></p>
        </div>
      

        <Footer/>
    </div>
  )
}

export default SustainabaleAgri