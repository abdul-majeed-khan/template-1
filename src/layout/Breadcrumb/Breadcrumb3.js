import Link from "next/link";
import React from "react";
import { Container } from "reactstrap";
import Img from "../../utils/BackgroundImageRatio";

const Breadcrumb3 = () => {
  return (
    <section className="breadcrumb-section  breadcrumb-sm">
      <Img src="/assets/images/inner-background.jpg" className="bg-img img-fluid" alt="" />
      <Container>
        <div className="breadcrumb-content">
          <div>
            <h2>Here Map</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/home/slider-filter-search">Listing</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Here Map
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb3;
