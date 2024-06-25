import { defineLordIconElement } from "lord-icon-element";
import { loadAnimation } from "lottie-web";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { gridData } from "@/data/pagesData";
import FilterPanel from "../grid/FilterPanel";
import Masonry from "./Masonry";

const BodyContent = ({ masonryGrid }) => {
  const [filterData, setFilterData] = useState(gridData);
  const [isActive, setIsActive] = useState("all");
  defineLordIconElement(loadAnimation);

  return (
    <Fragment>
      <section className='portfolio-section portfolio-grid'>
        <Container>
          <Row>
            <Col lg='12'>
              <FilterPanel setFilterData={setFilterData} isActive={isActive} setIsActive={setIsActive} gridData={gridData} />
              <Row className='column-sm '>
                <Masonry filterData={filterData} masonryGrid={masonryGrid} />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default BodyContent;
