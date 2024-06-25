/**
 * It takes a singleData prop and uses it to render a gallery of images.
 * @returns The image is being returned as a string.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import { useRouter } from "next/navigation";

const ImageBox = ({ singleData, id }) => {
  const router = useRouter();
  // const { id } = router.query;
  return (
    <section className='p-0 ratio3_2'>
      <Container fluid={true}>
        <div className='zoom-image-box zoom-gallery-multiple'>
          <Row>
            <Gallery>
              <Item original={singleData || "/assets/images/property/4.jpg"} width='1000' height='600'>
                {({ ref, open }) => (
                  <Col md='6' className=' p-0' onClick={open}>
                    <div ref={ref}>
                      <Img src={id ? singleData : "/assets/images/property/4.jpg"} className='bg-img' alt='' />
                    </div>
                  </Col>
                )}
              </Item>
              <Col md='3' sm='6' className='p-0'>
                <Item original='/assets/images/property/bugatti-2.jpg' width='1000' height='600'>
                  {({ ref, open }) => (
                    <a ref={ref} onClick={open}>
                      <Img src='/assets/images/property/bugatti-2.jpg' className='bg-img' alt='' />
                    </a>
                  )}
                </Item>
                <Item original='/assets/images/property/bugatti-3.jpg' width='1000' height='600'>
                  {({ ref, open }) => (
                    <a ref={ref} onClick={open}>
                      <Img src='/assets/images/property/bugatti-3.jpg' className='bg-img' alt='' />
                    </a>
                  )}
                </Item>
              </Col>
              <Col md='3' sm='6' className=' p-0'>
                <Item original='/assets/images/property/bugatti-4.jpg' width='1000' height='600'>
                  {({ ref, open }) => (
                    <a ref={ref} onClick={open}>
                      <Img src='/assets/images/property/bugatti-4.jpg' className='bg-img' alt='' />
                    </a>
                  )}
                </Item>
                <Item original='/assets/images/property/bugatti-5.jpg' width='1000' height='600'>
                  {({ ref, open }) => (
                    <a ref={ref} onClick={open}>
                      <Img src='/assets/images/property/bugatti-5.jpg' className='bg-img' alt='' />
                    </a>
                  )}
                </Item>
              </Col>
            </Gallery>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ImageBox;
