import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ProductCard from "../componenets/ProductCard";
import paddy from "../componenets/Images/paddy.jpg";
import './Pagestyle.css'
import corn from "../componenets/Images/corn.jpg"
import potato from "../componenets/Images/potato.jpg"
import bajra from "../componenets/Images/bajra.jpg"
import tomato from "../componenets/Images/tomato.jpg"
import barley from "../componenets/Images/barley.jpg"
import wheat from "../componenets/Images/wheat.jpg"
import rice from "../componenets/Images/rice.jpg"

const KrishiMarket = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-3" style={{margin:"auto"}}>
        <div className="row1">
          <div className="cards " style={{ display: "flex", flexWrap: "wrap",flexDirection: "row",justifyContent: "center"}}>
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={corn} title="Corn" about="Rs. 40 /Kg" />
            <ProductCard imgsrc={potato} title="Paddy" about="Rs. 11 /Kg" />
            <ProductCard imgsrc={bajra} title="Bajra" about="Rs. 30 /Kg" />
          </div>
        </div>

        <div className="row1">
          <div className="cards " style={{ display: "flex", flexWrap: "wrap",flexDirection: "row",justifyContent: "center"}}>
            <ProductCard imgsrc={tomato} title="Tomato" about="Rs. 25 /Kg" />
            <ProductCard imgsrc={barley} title="Barley" about="Rs. 14 /Kg" />
            <ProductCard imgsrc={wheat} title="wheat" about="Rs. 23 /Kg" />
            <ProductCard imgsrc={rice} title="Rice" about="Rs. 45 /Kg" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KrishiMarket;
