import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { Logo } from "@/components/elements/Logo";
import { FooterData } from "@/data/footerData";
import FooterBlog from "./elements/FooterBlog";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
import FooterLink from "./elements/FooterLink";
import FooterMap from "./elements/FooterMap";
import SubFooter from "./elements/SubFooter";

const FooterOne = ({ logo }) => {
  const [isActive, setIsActive] = useState();

  return (
    <footer className='footer-brown'>
      <div className='footer footer-custom-col'>
        <Container>
          <Row className='row'>
            <FooterContactUsDetails isActive={isActive} setIsActive={setIsActive} logo={logo || <Logo />} />
            <FooterLink value={FooterData.about} isActive={isActive} setIsActive={setIsActive} />
            <FooterMap isActive={isActive} setIsActive={setIsActive} />
            <FooterLink value={FooterData.tag} isActive={isActive} setIsActive={setIsActive} />
            <FooterBlog isActive={isActive} setIsActive={setIsActive} img={["/assets/images/footer/1.jpg", "/assets/images/footer/2.jpg"]} />
          </Row>
        </Container>
      </div>
      <SubFooter />
    </footer>
  );
};

export default FooterOne;
