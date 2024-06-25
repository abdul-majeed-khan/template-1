import Link from "next/link";
import React from "react";
import { Container } from "reactstrap";
import Img from "../../utils/BackgroundImageRatio";

const BreadCrumb2 = () => {
  return (
    <section className="breadcrumb-section p-0 effect-cls">
      <Img src="/assets/images/parallax/3.jpg" className="bg-img img-fluid" />
      <Container>
        <div className="breadcrumb-content">
          <div className="text-dark">
            <h2>About Us</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/home/slider-filter-search">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BreadCrumb2;
