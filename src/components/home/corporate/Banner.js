/**
 * It returns a section with a container, row, and column. The column contains a div with a span, h2,
 * p, and a link
 * @returns A function that returns a component
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Realestate, SubmitProperty } from "@/constValues/constValues";

const BannerSection = ({ banner }) => {
  return (
    <section className={`banner-section layout${banner}-bg parallax-image`}>
      <Container>
        <Row>
          <Col>
            <div className="banner-3">
              <span className={`label label-light label-flat`}># {Realestate}</span>
              <h2>
                Are you worried <br /> sick about moving out?
              </h2>
              <p>
                We know how it feels! Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Elegant retreat in a quiet Coral
                Gables setting.
              </p>
              <Link href="/agent/submit-property" className="btn btn-solid btn-flat">
                {SubmitProperty}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;
