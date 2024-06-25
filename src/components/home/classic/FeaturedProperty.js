/**
 * It takes an array of objects and returns a slider with each object as a slide
 * @returns An array of objects.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";
import { useSelector } from "react-redux";
import { feature4 } from "@/data/slickSlider";
import Img from "@/utils/BackgroundImageRatio";
import { FeaturedProperty } from "@/constValues/constValues";
import NoSsr from "@/utils/NoSsr";

const FeaturedPropertySection = ({ value }) => {
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <section className='feature-section ratio_landscape bg-half zoom-gallery'>
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className='feature-4 modern-feature arrow-gradient' {...feature4}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className='feature-wrap'>
                        <Row>
                          <Gallery>
                            <Col lg='6'>
                              <Item original={data.img} width='1000' height='600'>
                                {({ ref, open }) => (
                                  <div className='feature-image'>
                                    <Img src={data.img} className='bg-img' />
                                    <div className='feature-overlay' ref={ref} onClick={open}>
                                      <span>+</span>
                                    </div>

                                    <span className='label label-gradient label-lg'>{FeaturedProperty}</span>
                                  </div>
                                )}
                              </Item>
                            </Col>
                          </Gallery>

                          <Col lg='6'>
                            <div className='feature-content'>
                              <div className='details'>
                                <h3>
                                  <Link href={Array.isArray(data.img) ? `/property/image-slider/?id=${data.id}` : `/property/image-box/?id=${data.id}`}>{data.title}</Link>
                                </h3>
                                <span>{data.place}</span>
                                <p className='font-roboto'>{data.details}</p>
                              </div>
                              <ul className='detail-list'>
                                <li>
                                  <div className='d-flex'>
                                    <span className='label label-light label-lg'>
                                      <img src='/assets/images/icon/bed.png' className='img-fluid img-icon' alt='' />
                                    </span>
                                    <h6>Bedroom</h6>
                                  </div>
                                </li>
                                <li>
                                  <div className='d-flex'>
                                    <span className='label label-light label-lg'>
                                      <img src='/assets/images/icon/bathroom.png' className='img-fluid img-icon' alt='' />
                                    </span>
                                    <h6>Bathroom</h6>
                                  </div>
                                </li>
                                <li>
                                  <span className='label label-light label-lg'>{data.sqft} Sq Ft</span>
                                </li>
                              </ul>
                              <ul className='feature-price'>
                                <li>
                                  <h3>
                                    {symbol}
                                    {(data?.price * currencyValue).toFixed(2)}*
                                  </h3>
                                  <h6>Home For Sale</h6>
                                </li>
                                <li>
                                  <Link href='/agent/submit-property'>
                                    <button type='button' className='btn btn-gradient btn-lg'>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedPropertySection;
