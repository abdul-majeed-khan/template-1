/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values transformed by the callback function
 * @returns A React component
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { FeaturedCities, proCity } from "@/constValues/constValues";
import { feature2 } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";

const FeatureSection = ({ value }) => {
  return (
    <section className="feature-section bg-comman-2 slick-between">
      <Container fluid={true}>
        <Row>
          <Col>
            <div className="title-2 text-white">
              <h2>{FeaturedCities}</h2>
              <p>{proCity}</p>
            </div>
            <NoSsr>
              <Slider className="feature-2 dot-gradient" {...feature2}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="feature-box">
                        <img src={data.img} className="img-fluid" alt="" />
                        <div className="feature-bottom">
                          <h3>{data.city}</h3>
                          <NoSsr>
                            <span>{Math.floor(Math.random() * 100)}+ Property</span>
                          </NoSsr>
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

export default FeatureSection;
