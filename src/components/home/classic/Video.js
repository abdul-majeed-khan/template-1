/**
 * It returns a section with a container, a row, and two columns. The first column has a div with a
 * class of video-details, which contains a span, an h2, a p, and a button. The second column has a div
 * with a class of play-icon, which contains a div with a class of icon-video, which contains a span
 * and an a tag. The a tag contains an i tag
 * @returns The return statement is returning the value of the function.
 */
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Button, Modal, ModalBody } from "reactstrap";
import { AreYouWorried, SearchNow, SlickAboutMovingOut, VideoDetail } from "@/constValues/constValues";

const VideoSection = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <section className="video-section">
      <Container fluid={true}>
        <Row>
          <Col xl="5" lg="8">
            <div className="video-details">
              <span className="label label-light label-flat">#Realestate</span>
              <h2>
                {AreYouWorried} <br />
                {SlickAboutMovingOut}
              </h2>
              <p className="font-roboto">{VideoDetail}</p>
              <Link href="/listing/grid-view/2-grid/left-sidebar" className="btn btn-gradient btn-lg">
                  {SearchNow}
              </Link>
            </div>
          </Col>
          <Col xl="6" lg="4">
            <div className="play-icon">
              <div className="icon-video">
                <span className="heart-animation"></span>
                <a href="#video" onClick={() => setModal(true)}>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal className="video-modal" centered size="lg" isOpen={modal} toggle={toggle} modalTransition={{ timeout: 100 }}>
        <ModalBody className="m-0 p-0">
          <Button onClick={toggle} type="button" className="btn-close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </Button>
          <iframe src="https://www.youtube.com/embed/Sz_1tkcU0Co" allowFullScreen></iframe>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default VideoSection;
