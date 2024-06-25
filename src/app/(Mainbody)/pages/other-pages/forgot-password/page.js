"use client";
import React, { Fragment } from "react";
import { Container } from "reactstrap";
import { User } from "react-feather";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const ForgotPassword = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <section className='login-wrap'>
        <Container>
          <div className='row log-in'>
            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
              <div className='theme-card'>
                <div className='title-3 text-start'>
                  <h2>Forgot your password</h2>
                </div>
                <form>
                  <div className='form-group'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <User />
                        </div>
                      </div>
                      <input type='text' className='form-control' placeholder='Enter Email' required />
                    </div>
                  </div>
                  <div>
                    <button type='submit' className='btn btn-gradient btn-pill me-sm-3 me-2'>
                      Send request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FooterThree />
    </Fragment>
  );
};

export default ForgotPassword;
