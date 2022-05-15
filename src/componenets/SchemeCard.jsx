import React from "react";

const SchemeCard = ({title,content,link}) => {
  return (
    <div className="text-center">
      <div className="card text-center my-5" style={{width: "70%",margin:"auto"}}>
        <div className="card-body " style={{textAlign:"left"}}>
          <h5 className="card-title ">{title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
          <p className="card-text">
            {content}
          </p>
          <a href={link} className="card-link" style={{color:"green"}}>
           Read More
          </a>
          {/* <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SchemeCard;
