/**
 * It returns a section with a container with a row with a column with a slider with a div with a
 * logo-box with an image
 * @returns A function that returns a component.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { slide3 } from "@/data/slickSlider";
import { AppPropertyData } from "@/data/appPropertyData";
import NoSsr from "@/utils/NoSsr";

const BrandSection = () => {
  return (
    <section className="small-section bg-light-blue arrow-gradient">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-3 brand-slider" {...slide3}>
                {AppPropertyData.Brand3.map((data, i) => (
                  <div key={i}>
                    <a className="logo-box">
                      <img src={data} alt="" className="img-fluid" />
                    </a>
                  </div>
                ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BrandSection;
