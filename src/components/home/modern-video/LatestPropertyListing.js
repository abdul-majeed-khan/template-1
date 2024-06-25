import React from "react";
import { Gallery } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import { Discover, property } from "@/constValues/constValues";
import PropertyBoxSeven from "../../elements/propertyBoxs/PropertyBoxSeven";

const LatestPropertyListingSection = ({ value }) => {
  return (
    <section className='property-section property-list-view'>
      <Container>
        <Row className=' ratio_55'>
          <Col>
            <div className='title-2'>
              <h2>{property}</h2>
              <p>{Discover}</p>
            </div>
            <div className='property-2 row column-space zoom-gallery property-grid list-view'>
              <Gallery>
                {value &&
                  value.map((data, i) => (
                    <Col xl='6' className='wow fadeInUp' key={i}>
                      <PropertyBoxSeven data={data} />
                    </Col>
                  ))}
              </Gallery>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestPropertyListingSection;
