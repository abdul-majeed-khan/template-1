/**
 * It returns a section with a container that has a row with a column that has a div with a title, a
 * div with a feature-wrap, a row with a column with a div with a feature-image, a column with a div
 * with a feature-content, a div with details, a ul with a detail-list, a ul with a feature-price, and
 * a button
 * @returns A React component
 */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { Discover, PropertyOfTheDay } from "@/constValues/constValues";
import ImageSlider from "../../elements/ImageSlider";

const PropertyOfTheDaySection = ({ value }) => {
  const img = ["/assets/images/1.jpg", "/assets/images/2.jpg", "/assets/images/4.jpg", "/assets/images/3.jpg"];
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);

  return (
    <section className="banner-section banner-4 new-property parallax-image">
      <Container>
        <Row className=" ratio_landscape feature-section">
          <Col>
            <div className="title-2 text-white">
              <h2>{PropertyOfTheDay}</h2>
              <p>{Discover}</p>
            </div>
            <div className="feature-wrap">
              <Row>
                <Col xl="6" lg="5">
                  <div className="feature-image property-slider mb-0">
                    <ImageSlider images={img} />
                  </div>
                </Col>
                <Col xl="6" lg="7">
                  <div className="feature-content">
                    <div className="details">
                      <h3>
                        <Link href="/property/image-box">
                          <span>Home in</span> {value?.place}
                        </Link>
                      </h3>
                      <span>{value?.address}</span>
                      <p className="font-roboto">{value?.details}</p>
                    </div>
                    <ul className="detail-list">
                      <li>
                        <div className="d-flex">
                          <span className="label label-light label-lg">
                            <img src="/assets/images/icon/bed.png" className="img-fluid img-icon" alt="" />
                          </span>
                          <h6>Bedroom</h6>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <span className="label label-light label-lg">
                            <img src="/assets/images/icon/bathroom.png" className="img-fluid img-icon" alt="" />
                          </span>
                          <h6>Bathroom</h6>
                        </div>
                      </li>
                      <li>
                        <span className="label label-light label-lg">{value?.sqft} Sq Ft</span>
                      </li>
                    </ul>
                    <ul className="feature-price">
                      <li>
                        <h3>
                          {symbol}
                          {(value?.price * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
                        </h3>
                        <h6>Home For Sale</h6>
                      </li>
                      <li>
                        <Link href="/property/image-box" className="btn btn-gradient btn-pill btn-lg">
                          View property
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyOfTheDaySection;
