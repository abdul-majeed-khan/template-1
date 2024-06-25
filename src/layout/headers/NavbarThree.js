/**
 * It returns a header with a container with a row with a column with a div with a logo and two navs
 * @returns The NavbarThree component is being returned.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Logo3 } from "../../components/elements/Logo";
import MainNav from "./elements/MainNav";
import RightNav from "./elements/RightNav";

const NavbarThree = ({ logo }) => {
  return (
    <header className='header-2'>
      <Container>
        <Row>
          <Col>
            <div className='menu'>
              {logo || <Logo3 />}
              <MainNav />
              <RightNav />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavbarThree;
