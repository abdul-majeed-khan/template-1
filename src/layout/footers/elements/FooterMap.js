import React from "react";
import { Col } from "reactstrap";

const FooterMap = ({ isActive, setIsActive }) => {
  return (
    <Col xl='3' md='6' className='order-xl'>
      <div className='footer-links'>
        <h5
          className='footer-title'
          onClick={(e) => {
            e.preventDefault();
            setIsActive("OurLocation");
            isActive === "OurLocation" && setIsActive();
          }}>
          Our Location
          <span className='according-menu'>
            <i className='fas fa-chevron-down'></i>
          </span>
        </h5>
        <div className={`footer-content ${isActive === "OurLocation" ? "d-block" : "d-none d-md-block"}`}>
          <div className='footer-map'>
            <iframe
              title='realestate location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterMap;
