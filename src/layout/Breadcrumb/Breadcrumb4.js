import Link from "next/link";
import React from "react";
import { Container } from "reactstrap";

const Breadcrumb4 = () => {
  return (
    <section className="breadcrumb-section  breadcrumb-gradient breadcrumb-sm">
      <Container>
        <div className="breadcrumb-content">
          <div>
            <h2>leaflet Map</h2>
            <nav aria-label="breadcrumb" className="theme-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/home/slider-filter-search">Listing</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  leaflet Map
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb4;
