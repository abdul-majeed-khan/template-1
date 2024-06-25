/**
 * It returns a section with a container with a row with three columns, each of which has a div with a
 * contact icon, a heading, and a paragraph
 * @returns The ContactDetailsSection component is being returned.
 */
import React from "react";
import { Mail, MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";

const ContactDetailsSection = () => {
  return (
    <section className='small-section contact_section pt-0 contact_bottom'>
      <Container>
        <Row>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>Where ?</h4>
              <p className='font-roboto'>
                549 Sulphur Springs Road <br />
                Downers Grove, IL 60515 <br />
                +91 361264100
              </p>
            </div>
          </Col>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <MapPin />
              <h4>Second branch</h4>
              <p className='font-roboto'>
                5415 Spring garden Road <br />
                Halifax, IL 97230 <br />
                +91 187230014
              </p>
            </div>
          </Col>
          <Col lg='4' sm='6'>
            <div className='contact_wrap'>
              <Mail />
              <h4>Online service</h4>
              <ul>
                <li>Inquiries: sheltos@.in</li>
                <li>Support: help@.in</li>
                <li>+86 163 - 451 - 7894</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetailsSection;
