import React from "react";
import { Heart } from "react-feather";
import { Container, Row } from "reactstrap";
import { FooterData } from "../../../data/footerData";

const SubFooter = ({ values }) => {
  return (
    <div className={`sub-footer ${values} && ${values} `}>
      <Container>
        <Row className='row'>
          <div className='col-xl-6 col-md-6'>
            <div className='footer-social sub-footer-link'>
              <ul>
                {FooterData.sub_footer.map((value, index) => (
                  <li key={index}>
                    <a href={value.link}>
                      <i className={value.class}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='col-xl-6 col-md-6 text-end'>
            <div className='copy-right'>
              <p className='mb-0'>
                Copyright 2022 Sheltos By <Heart /> Pixelstrap
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooter;
