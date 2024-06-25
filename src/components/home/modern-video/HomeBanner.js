/**
 * It renders a video background with a search form on top of it
 * @returns A section with a video and a form.
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { aboutMoving, Realestate } from "@/constValues/constValues";
import InputForm from "../slider-filter-search/homeElements/InputForm";

const HomeBannerSection = () => {
  return (
    <section className="layout-home2 banner-section video-layout p-0">
      <div id="particles-js" className="particles" />
      <video className="bgvideo" playsInline autoPlay muted loop>
        <source src="/assets/video/video.mp4" type="video/mp4" />
      </video>
      <Container>
        <Row className=" overlay-content">
          <Col lg="12">
            <div className="video-details p-0">
              <div className="left-sidebar">
                <span className="label label-light label-flat"># {Realestate}</span>
                <Link href="/property/image-box">
                  <h2> {aboutMoving} </h2>
                </Link>
                <InputForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
