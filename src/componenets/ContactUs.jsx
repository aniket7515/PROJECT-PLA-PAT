import React from "react";
import './styles.css'

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="top text-center my-5 py-3">
        <h2>Contact Us</h2>
        <hr
          style={{
            width: "30%",
            textAlign: "center",
            margin: "auto",
            lineHeight: "normal",
          }}
        />
      </div>

      <form action="https://formspree.io/f/mrgjryod" method="POST">
        <div className="fromsec1 my-3">
          <input name="fname" className="fnames mx-2 p-2" type="text" placeholder="Name" style={{width:"20%",border: "none",backgroundColor:"#ededed",borderRadius: "5px"}}/>
          <input name="email" className="emails p-2" type="email" placeholder="Email Address"style={{width:"30%",border: "none",backgroundColor:"#ededed",borderRadius: "5px"}} />
        </div>
        <div>
        <textarea className="txtarea" name="message" type="text" placeholder="Enter you problem" style={{width:"50%",height:"100px"}}/>

        </div>

        <div>
            <input name="phoneNumber" className="pno p-2 mx-2" type="tel" placeholder="Phone Number"style={{width:"20%",border: "none",backgroundColor:"#ededed",borderRadius: "5px"}} />
        <input className="submission p-2" type="submit" value="Submit"style={{width:"30%",border: "none",backgroundColor:"#4dd99a",borderRadius: "5px"}} />

        </div>
       
        
      </form>
      <p><strong>Toll Free:</strong>1800-180-1551</p>
    </div>
  );
};

export default ContactUs;
