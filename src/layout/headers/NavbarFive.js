import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Logo6 } from "../../components/elements/Logo";
import MainNav from "./elements/MainNav";
import RightNav from "./elements/RightNav";

const NavbarFive = ({ logo }) => {
  return (
    <header className='header-1 header-9 inner-page light-header shadow-cls'>
      <Container>
        <Row>
          <Col>
            <div className='menu'>
              {logo || <Logo6 />}
              <MainNav />
              <RightNav />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarFive;
