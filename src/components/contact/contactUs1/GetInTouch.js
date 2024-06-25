/**
 * It renders a section with a container, row, and two columns. The first column has an image and the
 * second column has a LogInCard
 * @returns A section with a container with a row with two columns. The first column has an image and
 * the second column has a login card.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import LogInCard from "./LogInCard";

const GetInTouchSection = () => {
  return (
    <section className="small-section get-in-touch">
      <Container>
        <Row>
          <Col lg="6" className="contact-img">
            <img src="/assets/images/inner-pages/1.png" className="img-fluid" alt="" />
          </Col>
          <Col lg="6">
            <LogInCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouchSection;
