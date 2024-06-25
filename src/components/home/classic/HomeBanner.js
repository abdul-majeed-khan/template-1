import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Realestate } from "@/constValues/constValues";
import { homeNav, homeSlider4 } from "@/data/slickSlider";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/NoSsr";

const HomeBannerSection = ({ value }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className="layout-home4 p-0">
      <Container fluid={true} className="p-0">
        <Row className=" m-0">
          <Col lg="12" className="p-0">
            <div className="sync-slider">
              <NoSsr>
                <Slider className="home-slider-4 arrow-image" {...homeSlider4} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                  {value &&
                    value.map((data, i) => (
                      <div key={i}>
                        <div className="slider-image img-fluid ">
                          <Img src={data.img} className="bg-img" />
                          <Container>
                            <Row>
                              <Col xl="6" lg="7" md="8" sm="12">
                                <div className="home-content">
                                  <h6 className="line-right " data-delay-in="0.4" data-animation-in="fadeInUp">
                                    # {Realestate}
                                  </h6>
                                  <h1 data-delay-in="0.6" data-animation-in="fadeInUp">
                                    {data.title}
                                  </h1>
                                  <p data-delay-in="0.8" data-animation-in="fadeInUp" className="font-roboto">
                                    {data.details}
                                  </p>

                                  <h6 data-delay-in="0.8" data-animation-in="fadeInUp" className="font-roboto mb-0">
                                    <img src="/assets/images/icon/bed.png" className="img-icon me-2" alt="" />
                                    {data.bedroom} Bedroom
                                    <span className="mx-2">|</span>
                                    <img src="/assets/images/icon/bathroom.png" className="img-icon me-2" alt="" />
                                    {data.bathroom} Bathroom
                                    <span className="mx-2">|</span>
                                    <img src="/assets/images/icon/sq.png" className="img-icon" alt="" />
                                    {data.sqft} Sq Ft
                                  </h6>
                                  <h2 data-delay-in="1.2" data-animation-in="fadeInUp">
                                    ${data.price}
                                  </h2>
                                  <Link href="/property/image-box" data-delay-in="1.4" data-animation-in="fadeInUp" className="btn btn-gradient btn-lg">
                                    View Details
                                  </Link>
                                  <div data-delay-in="0.2" data-animation-in="fadeInLeft" className="square-bg"></div>
                                </div>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </div>
                    ))}
                </Slider>
                <Slider className="home-nav" {...homeNav} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                  {value &&
                    value.map((data, i) => (
                      <div key={i}>
                        <div className="slider-image">
                          <Img src={data.img} className="bg-img" />
                          <span>01/0{i + 1}</span>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
