import React from "react";
import paddy from './Images/paddy.jpg'

const ProductCard = ({imgsrc,title,about}) => {
  return (
    <div className="cardbody p-1">
      
      <div className="card" style={{width: "16rem",textAlign: "left"}}>
        <img className="card-img-top" src={imgsrc} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>price:</strong> {about}
          </p>
          <a href="#" className="btn btn-primary" style={{backgroundColor:"#4dd99a"}}>
           Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
