/**
 * It takes an array of objects as a prop and returns a Slider component with a div for each object in
 * the array
 * @returns The HomeBannerSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { homeSlider3 } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";

const HomeBannerSection = ({ value }) => {
  return (
    <section className="layout-home3 p-0">
      <Container fluid={true} className="p-0">
        <Row className=" m-0">
          <Col lg="12" className="p-0">
            <div>
              <NoSsr>
                <Slider className="home-slider-3 arrow-image" {...homeSlider3}>
                  {value.map((data, i) => (
                    <div key={i}>
                      <div className={`bg-layout-3 light-bg-${i + 1}`}>
                        <div className="banner-3">
                          <span className="label label-light label-flat">#Realestate</span>
                          <h1>{data.title}</h1>
                          <p>{data.details}</p>
                          <Link href="/property/image-box" className="btn btn-solid btn-flat">
                            View More
                          </Link>
                        </div>
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
