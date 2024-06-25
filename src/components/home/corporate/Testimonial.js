/**
 * It takes an array of objects and returns a Slider component with a bunch of divs inside
 * @returns The return value is the value of the last expression evaluated inside the function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { PropertyServicesDetail } from "@/constValues/constValues";
import { testimonial3 } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";
import ReviewStarr from "../../elements/ReviewStarr";

const TestimonialSection = ({ value }) => {
  return (
    <section className="pb-0 testimonial-style-2">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Our <span>Client</span>
              </h2>
              <p className="font-roboto">{PropertyServicesDetail}</p>
            </div>
            <NoSsr>
              <Slider className="testimonial-3 modern-dot" {...testimonial3}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <Row className="our-client">
                        <Col md="6">
                          <div className="client-left">
                            <img src={data.img} className="img-fluid" alt="" />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="client-right">
                            <p className="font-roboto">{data.details}</p>
                            <ul className="client-rating">
                              <ReviewStarr rating={data.rating} />
                            </ul>
                            <h3>{data.name}</h3>
                            <h6>Our Customer</h6>
                            <span className="quote-img">
                              <img src="/assets/images/testimonial/quote-2.png" alt="" />
                            </span>
                          </div>
                        </Col>
                      </Row>
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

export default TestimonialSection;
