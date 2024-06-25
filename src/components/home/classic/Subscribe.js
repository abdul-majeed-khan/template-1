/**
 * It returns a section with a container, row, and column. The column contains a div with a span, h2,
 * p, and form. The form contains a div and a button
 * @returns A section with a container, row, and col.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Realestate, StayUpToDate, VideoDetail } from "@/constValues/constValues";

const SubscribeSection = () => {
  return (
    <section className='subscribe-section'>
      <Container>
        <Row>
          <Col>
            <div className='video-details'>
              <span className='label label-light label-flat'># {Realestate}</span>
              <h2>{StayUpToDate}</h2>
              <p className='font-roboto'>{VideoDetail}</p>
              <form>
                <div className='form-group'>
                  <input type='email' className='form-control' placeholder='Enter Your Email Address' required />
                </div>
                <button type='submit' className='btn btn-gradient btn-lg'>
                  Subscribe Now
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeSection;
