import React from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ProductCard from "../componenets/ProductCard";
import paddy from "../componenets/Images/paddy.jpg";

const KrishiMarket = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-3" style={{margin:"auto"}}>
        <div className="row1">
          <div className="cards " style={{ display: "flex", flexWrap: "wrap" }}>
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
          </div>
        </div>

        <div className="row1">
          <div className="cards " style={{ display: "flex", flexWrap: "wrap" }}>
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
            <ProductCard imgsrc={paddy} title="Paddy" about="Rs. 20,000 /Kg" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KrishiMarket;
