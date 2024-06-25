"use client";
import React, { Fragment } from "react";
import { User, Lock, Mail } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const SignUp = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <section>
        <Container>
          <Row className=" log-in sign-up">
            <Col xl="5" lg="6" md="8" sm="10">
              <div className="theme-card">
                <div className="title-3 text-start">
                  <h2>Sign up</h2>
                </div>
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <User />
                        </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Mail />
                        </div>
                      </div>
                      <input type="email" className="form-control" placeholder="Enter email address" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <Lock />
                        </div>
                      </div>
                      <input type="password" id="pwd-input" className="form-control" placeholder="Password" maxLength="8" required />
                      <div className="input-group-apend">
                        <div className="input-group-text">
                          <i id="pwd-icon" className="far fa-eye-slash"></i>
                        </div>
                      </div>
                    </div>
                    <div className="important-note">password should be a minimum of 8 characters and should contains letters and numbers</div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-gradient btn-pill me-sm-3 me-2">
                      Create Account
                    </button>
                    <Link href="/pages/other-pages/login" className="btn btn-dashed btn-pill">
                      Log in
                    </Link>
                  </div>
                  <div className="divider">
                    <h6>or</h6>
                  </div>
                  <div>
                    <h6>Sign up with</h6>
                    <div className="row social-connect">
                      <Col sm="6">
                        <a href="https://www.facebook.com/" className="btn btn-social btn-flat facebook p-0">
                          <i className="fab fa-facebook-f"></i>
                          <span>Facebook</span>
                        </a>
                      </Col>
                      <Col sm="6">
                        <a href="https://twitter.com/" className="btn btn-social btn-flat twitter p-0">
                          <i className="fab fa-twitter"></i>
                          <span>Twitter</span>
                        </a>
                      </Col>
                      <Col sm="6">
                        <a href="https://account.google.com" className="btn btn-social btn-flat google p-0">
                          <i className="fab fa-google"></i>
                          <span>Google</span>
                        </a>
                      </Col>
                      <Col sm="6">
                        <a href="https://www.linkedin.com/" className="btn btn-social btn-flat linkedin p-0">
                          <i className="fab fa-linkedin-in"></i>
                          <span>Linkedin</span>
                        </a>
                      </Col>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterThree />
    </Fragment>
  );
};

export default SignUp;
