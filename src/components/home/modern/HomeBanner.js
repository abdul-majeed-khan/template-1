import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { aboutMoving } from "../../../constValues/constValues";
import InputForm from "../slider-filter-search/homeElements/InputForm";

const HomeBannerSection = () => {
  return (
    <>
      <section className="layout-home2 banner-section p-0">
        <Container fluid={true} className=" p-0">
          <Row className=" m-0">
            <Col lg="12" className=" p-0 position-relative">
              <video autoPlay muted loop className="video-bg" id="block" style={{ objectFit: "cover", width: "100%", height: "100%", zIndex: "5" }}>
                <source src="/assets/video/video2.mp4" type="video/mp4" />
              </video>
              <div className="home-main feature-section new-property" style={{ backgroundImage: "none", zIndex: "6", backgroundColor: "transparent" }}>
                <div className="container">
                  <div className="feature-content video-details text-start p-0 vertical-search mt-0">
                    <span className="label-cross">New !</span>
                    <div className="left-sidebar">
                      <Link href="/listing/grid-view/2-grid/left-sidebar">
                        <h2> {aboutMoving} </h2>
                      </Link>
                      <InputForm />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeBannerSection;
