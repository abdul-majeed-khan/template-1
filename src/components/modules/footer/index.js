import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import FooterThree from "@/layout/footers/FooterThree";
import FooterOne from "@/layout/footers/FooterOne";
import FooterTwo from "@/layout/footers/FooterTwo";
import FooterFour from "@/layout/footers/FooterFour";

const BodyContent = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Dark footer with image as background</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterThree />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Brown footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterOne />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Dark footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterTwo />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="card-header bg-transparent">
              <h5 className="f-w-600 mt-3 text-center"> Light footer</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterFour />
    </Fragment>
  );
};

export default BodyContent;
