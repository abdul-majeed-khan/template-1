/**
 * It takes an array of objects as a prop and returns a slider with the data from the array
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { PropertyServices, PropertyServicesDetail } from "@/constValues/constValues";
import { serviceSlider } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";

const PropertyServicesSection = ({ value }) => {
  return (
    <section className="service-section service-bg">
      <Container>
        <div className="title-3 text-start">
          <h2>{PropertyServices}</h2>
          <p className="font-roboto">{PropertyServicesDetail}</p>
        </div>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="service-slider arrow-gradient arrow-right" {...serviceSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="service-wrapper">
                        <div className="top-img-box">
                          <div>
                            <img src={data.img} className="img-fluid" alt="" />
                          </div>
                        </div>
                        <div className="service-details">
                          <h3>
                            <Link href="/pages/other-pages/services">{data.title}</Link>
                          </h3>
                          <p className="font-roboto">{data.details}</p>
                          <Link href="/pages/other-pages/services">View details</Link>
                        </div>
                      </div>
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

export default PropertyServicesSection;
