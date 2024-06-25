/**
 * It returns a section with a container with a row with a sidebar and a single property section
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Container, Row } from "reactstrap";
import ContactInfo from "../../../layout/sidebarLayout/ContactInfo";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import Featured from "../../../layout/sidebarLayout/Featured";
import Filter from "../../../layout/sidebarLayout/Filter";
import Mortgage from "../../../layout/sidebarLayout/Mortgage";
import RecentlyAdded from "../../../layout/sidebarLayout/RecentlyAdded";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import NoSsr from "../../../utils/NoSsr";
import RelatedProperty from "./RelatedProperty";
import SinglePropertySection from "./SingleProperty";
import SliderBreadcrumbSection from "./SliderBreadcrumb";

const BodyContent = ({ side }) => {
  return (
    <NoSsr>
      <SliderBreadcrumbSection />
      <section className="single-property">
        <Container>
          <Row className=" ratio_65">
            <Sidebar mortgage={true} side={side} singleProperty={true}>
              <ContactInfo />
              <Exploration />
              <Filter sm={12} />
              <Featured />
              <RecentlyAdded />
              <Mortgage />
            </Sidebar>
            <SinglePropertySection />
          </Row>
        </Container>
      </section>
      <RelatedProperty />
    </NoSsr>
  );
};

export default BodyContent;
