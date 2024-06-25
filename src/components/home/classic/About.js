/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values of the keys being the values of the keys in the original array of objects
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { MeetOurAgent, PropertyServicesDetail } from "@/constValues/constValues";
import { about3 } from "@/data/slickSlider";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/NoSsr";
import SocialAccounts from "../../elements/SocialAccounts";

const About = ({ value }) => {
  return (
    <section className="about-section slick-between">
      <Container>
        <Row className="ratio_asos">
          <Col>
            <div className="title-3 text-start">
              <h2>{MeetOurAgent}</h2>
              <p className="font-roboto">{PropertyServicesDetail}</p>
            </div>
            <NoSsr>
              <Slider className="arrow-gradient arrow-right" {...about3}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="about-box wow fadeInUp">
                        <div className="bg-size agent-image">
                          <Img src={data.img} className="bg-img" />
                          <div className="overlay-agent">
                            <div className="agent-details">
                              <Link href="/agent/agent-profile">
                                <h6 className="d-flex">
                                  {data.name}
                                  <span className="label-heart ms-2">
                                    <i className="fas fa-heart"></i>
                                  </span>
                                </h6>
                              </Link>
                              <h5>{data.title}</h5>
                              <p className="font-roboto">{data.details}</p>
                              <span className="font-roboto">{data.email}</span>
                              <SocialAccounts />
                            </div>
                          </div>
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

export default About;
