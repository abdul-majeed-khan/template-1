/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { feature3 } from "@/data/slickSlider";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/NoSsr";

const FeaturePropertySection = ({ value }) => {
  return (
    <section className="feature-section ratio_landscape pt-0">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Featured <span>Property</span>
              </h2>
              <p className="font-roboto">Residences can be classified into different type of housing tenure can used for same physical type.</p>
            </div>
            <Gallery>
              <NoSsr>
                <Slider className="feature-3 classic-feature arrow-image zoom-gallery" {...feature3}>
                  {value &&
                    value.map((data, i) => (
                      <div data-title="classic-image1" className="feature-style" key={i}>
                        <div className="feature-wrap">
                          <Row>
                            <Col xl="6" lg="5">
                              <div className="feature-image">
                                <div className="zoom">
                                  <Item original={data.img} width="1000" height="600" key={i}>
                                    {({ ref, open }) => (
                                      <div className="feature-overlay" ref={ref} onClick={open}>
                                        <span>+</span>
                                      </div>
                                    )}
                                  </Item>
                                  <Img src={data.img} className="bg-img" />
                                </div>

                                <span className="label label-solid label-lg label-flat">Featured</span>
                              </div>
                            </Col>
                            <Col xl="6" lg="7">
                              <div className="feature-content">
                                <div className="details">
                                  <h3>
                                    <Link href="/property/image-box">{data.title}</Link>
                                  </h3>
                                  <span>{data.details}</span>
                                  <p className="font-roboto">{data.moreDetails}</p>
                                </div>
                                <ul className="detail-list">
                                  <li>
                                    <div className="d-flex">
                                      <span className="label label-light label-flat label-lg">{data.bedroom}</span>
                                      <h6>Bedroom</h6>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex">
                                      <span className="label label-light label-flat label-lg">{data.bathroom}</span>
                                      <h6>Bathroom</h6>
                                    </div>
                                  </li>
                                  <li>
                                    <span className="label label-light label-flat label-lg">{data.sqft} Sq Ft</span>
                                  </li>
                                </ul>
                                <ul className="feature-price">
                                  <li>
                                    <h3>${data.price}</h3>
                                    <h6>Home For Sale</h6>
                                  </li>
                                  <li>
                                    <Link href="/agent/submit-property">
                                      <button type="button" className="btn btn-solid btn-flat">
                                        submit property
                                      </button>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </Gallery>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturePropertySection;
