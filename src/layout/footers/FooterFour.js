import Link from "next/link";
import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { FooterData } from "../../data/footerData";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
import FooterLink from "./elements/FooterLink";

const FooterFour = () => {
  const [isActive, setIsActive] = useState();
  return (
    <footer className="footer-light">
      <div className="footer">
        <Container>
          <Row>
            <FooterContactUsDetails
              logo={
                <Link href="/">
                  <img src="/assets/images/logo/4.png" className="for-light" alt="" />
                  <img src="/assets/images/logo/9.png" className="for-dark" alt="" />
                </Link>
              }
              isActive={isActive}
              setIsActive={setIsActive}
              liteFooter="true"
            />

            <FooterLink value={FooterData.about} isActive={isActive} setIsActive={setIsActive} liteFooter={6} />
            <FooterLink value={FooterData.buy} isActive={isActive} setIsActive={setIsActive} liteFooter={6} />
            <FooterLink value={FooterData.sell} isActive={isActive} setIsActive={setIsActive} liteFooter={6} />
            <FooterLink value={FooterData.relandEstate} isActive={isActive} setIsActive={setIsActive} liteFooter={6} />
          </Row>
        </Container>
      </div>
      <div className="sub-footer sub-footer-dark">
        <Container>
          <Row>
            <div className="col-xl-6 col-md-6">
              <div className="footer-social sub-footer-link">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://accounts.google.com/">
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 text-end">
              <div className="copy-right">
                <p className="mb-0">
                  Copyright 2022 Sheltos By <i className="fas fa-heart"></i> Pixelstrap
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterFour;
