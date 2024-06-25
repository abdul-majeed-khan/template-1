/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values of the keys being the values of the keys in the original array of objects
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail, ListingProperty } from "@/constValues/constValues";
import PropertyBoxSix from "../../elements/propertyBoxs/PropertyBoxSix";

const ListingPropertySection = ({ value }) => {
  const [active, setActive] = useState(1);
  return (
    <section className='property-section'>
      <Container>
        <Row className='row ratio_landscape'>
          <Col>
            <div className='title-3 text-start d-flex'>
              <div>
                <h2>{ListingProperty}</h2>
                <p className='font-roboto'>{LatestPropertyDetail}</p>
              </div>
              <ul className='nav nav-tabs pagination-tab' id='top-tab' role='tablist'>
                <li className='nav-item'>
                  <a
                    className={`nav-link ${active === 1 ? "active" : ""}`}
                    onClick={() => {
                      setActive(1);
                    }}>
                    1
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className={`nav-link ${active === 2 ? "active" : ""}`}
                    onClick={() => {
                      setActive(2);
                    }}>
                    2
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className={`nav-link ${active === 3 ? "active" : ""}`}
                    onClick={() => {
                      setActive(3);
                    }}>
                    3
                  </a>
                </li>
              </ul>
            </div>
            <div className='tab-content' id='top-tabContent'>
              <div className='tab-pane fade show active' id='prty-1'>
                <div className='row list-property column-space no-slider-property'>
                  {value &&
                    value.slice(`${1 * active === 1 ? 0 : 6 * active - 6}`, `${6 * active}`).map((data, i) => (
                      <Col xl='4' lg='6' key={i}>
                        <PropertyBoxSix data={data} />
                      </Col>
                    ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ListingPropertySection;
