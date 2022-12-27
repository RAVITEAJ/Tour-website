import React from "react";
import "./Testimonial.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial__center">
          <h1>testimonial</h1>
        </div>
        <div className="testimonial__boxes">
          <div className="testimonial__img">
            <img src="./images/img-9.png" alt="" />
            <h1>johndue</h1>
            <h6>farm & CO</h6>
          </div>
          <div className="testimonial__content">
            <FormatQuoteIcon />
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit
            </p>
            <FormatQuoteIcon/>
          </div>
          <div className="dots">
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </div>
        </div>
        <div className="contact__us">
          <div className="contact__center">
            <h2>contact <span>us</span></h2>
          </div>
          <form action="#" className="form">
            <input type="text" placeholder="your name" />
            <input type="text" placeholder="phone number" />
            <input type="email" placeholder="email" />
            <textarea name="messages" id="" cols="30" rows="10" placeholder="message"></textarea>
          </form>
          <div className="send__btns">
            <a href="!#" className="btn send">send</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
