/**
 * It returns a section with a container, row, and column. The column contains a div with a class of
 * banner-2 and ratio2_3. The div contains a row with two columns. The first column contains a div with
 * a class of mobile-image and bg-size. The div contains an image with a class of bg-img. The second
 * column contains a div with a class of banner-right. The div contains a h6, h2, p, and div. The div
 * contains two a tags
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { freeDownload, homeSearch, searchAnyTime } from "@/constValues/constValues";
import Img from "@/utils/BackgroundImageRatio";

const ParallaxBannerSection = () => {
  return (
    <section className='banner-inner banner-section layout2-bg parallax-image'>
      <Container>
        <Row>
          <Col>
            <div className='banner-2 ratio2_3'>
              <Row>
                <Col xl='7' lg='6'>
                  <div className='mobile-image bg-size d-lg-block d-none '>
                    <Img src='/assets/images/mobile-bg.png' className='bg-img' />
                  </div>
                </Col>
                <Col xl='5' lg='6' md='7' className='offset-lg-0 offset-md-5'>
                  <div className='banner-right'>
                    <h6>{freeDownload}</h6>
                    <h2>{homeSearch}</h2>
                    <p className='font-roboto'>{searchAnyTime}</p>
                    <div className='button-banner'>
                      <a href='https://play.google.com/' className='btn btn-gradient btn-pill'>
                        <img src='/assets/images/playstore.png' alt='' className='me-1' /> Play Store
                      </a>
                      <a href='https://appstoreconnect.apple.com' className='btn btn-light-bg btn-pill'>
                        <img src='/assets/images/app-icon.png' alt='' className='me-1' />
                        <span> App Store</span>
                      </a>
                    </div>
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

export default ParallaxBannerSection;
