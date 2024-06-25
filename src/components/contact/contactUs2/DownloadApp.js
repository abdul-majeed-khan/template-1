/**
 * It returns a section with a container, row, and two columns. The first column has a div with a
 * download wrap class, and the second column has a form with an app-right class
 * @returns The return value of the function is the return value of the last statement executed in the
 * function.
 */
import React from "react";
import { Button, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";

const DownloadAppSection = () => {
  return (
    <section className='small-section download-section bg-light'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='download-wrap'>
              <h3>Download Our Apps</h3>
              <p className='font-roboto'>Created for convenience and ease to make it's memorable</p>
              <ul>
                <li>
                  <a href='https://appstoreconnect.apple.com'>
                    <img src='/assets/images/inner-pages/app.png' className='img-fluid' alt='' />
                  </a>
                </li>
                <li>
                  <a href='https://play.google.com/'>
                    <img src='/assets/images/inner-pages/googleplay.png' className='img-fluid' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg='6'>
            <Form className='app-right'>
              <div className='input-app'>
                <FormGroup className='form-group'>
                  <select>
                    <option>+ 62</option>
                    <option>+ 91</option>
                    <option>+ 61</option>
                  </select>
                  <Input
                    className='form-control'
                    placeholder='Enter your phone number'
                    type='tel'
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    maxLength='9'
                    required
                  />
                </FormGroup>
                <Button type='submit' className='btn btn-gradient btn-flat'>
                  Send me
                </Button>
              </div>
              <p className='font-roboto mb-0'>Standard SMS rates may apply</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppSection;
