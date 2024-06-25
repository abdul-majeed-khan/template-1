"use client";
import React, { Fragment } from "react";
import { Container } from "reactstrap";
import Link from "next/link";
import NavbarFive from "@/layout/headers/NavbarFive";

const ComingSoon2 = () => {
  return (
    <Fragment>
      <NavbarFive />
      <section className="coming-simple h-auto">
        <Container>
          <div className="row log-in">
            <div className="col-lg-6 ratio2_3 order-lg-1">
              <img src="/assets/images/inner-pages/1.svg" className="img-fluid bg-size" alt="" />
            </div>
            <div className="col-lg-6 m-0">
              <div className="title-3 text-start">
                <h6>Clean & responsive</h6>
                <h2>Coming soon</h2>
              </div>
              <div className="site-construction">
                <h4>Site under construction, we are currently working</h4>
                <p className="font-roboto">Connected residences might be owned by a single entity and leased out, or owned separately with an agreement covering the relationship between.</p>
              </div>
              <form action="#" className="theme-form w-100">
                <div className="form-group">
                  <input type="email" name="email" id="name" className="form-control" placeholder="Enter your email address" required />
                  <button type="submit" className="btn btn-gradient btn-pill">
                    subscribe
                  </button>
                </div>
              </form>
              <Link href="/home/corporate" className="btn btn-gradient btn-pill mt-4">
                <i className="fas fa-arrow-left me-2"></i> Back to home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default ComingSoon2;
