"use client";
import React, { Fragment, useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import BodyContent from "@/components/pages/blogDetailPages";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import Img from "@/utils/BackgroundImageRatio";

const DetailWithVideo = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"}>
        <div className='blog-detail-image'>
          <div className='play-bg-image'>
            <div>
              <Img src='/assets/images/parallax/4.jpg' className='bg-img' alt='' />
            </div>
            <div className='icon-video'>
              <a onClick={() => setModal(true)}>
                <i className='fas fa-play'></i>
              </a>
            </div>
          </div>
        </div>
        <Modal className='video-modal' centered size='lg' isOpen={modal} toggle={toggle} modalTransition={{ timeout: 100 }}>
          <ModalBody className='m-0 p-0'>
            <Button onClick={toggle} type='button' className='btn-close' aria-label='Close'>
              <span aria-hidden='true'>×</span>
            </Button>
            <iframe src='https://www.youtube.com/embed/Sz_1tkcU0Co' allowFullScreen></iframe>
          </ModalBody>
        </Modal>
      </BodyContent>
      <FooterThree />
    </Fragment>
  );
};

export default DetailWithVideo;
