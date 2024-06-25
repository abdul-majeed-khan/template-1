/**
 * It returns a section with a container, a row, and a column. Inside the column, there's a title, a
 * nav, and a tab content
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useState } from "react";
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Discover, WhatAreYouLookingFor } from "@/constValues/constValues";
import ModernTabSection from "./propertyTab/ModernTab";

const PropertyTabSection = ({ value }) => {
  const [active, setActive] = useState("Family House");
  return (
    <section className='property-section bg-comman-2'>
      <Container>
        <Row className='ratio_55'>
          <Col>
            <div className='title-2 text-white'>
              <h2>{WhatAreYouLookingFor}</h2>
              <p>{Discover}</p>
            </div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  onClick={() => {
                    setActive("Morden Villa");
                  }}
                  active={active === "Morden Villa" && true}>
                  Morden Villa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    setActive("Family House");
                  }}
                  active={active === "Family House" && true}>
                  Family House
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    setActive("Town House");
                  }}
                  active={active === "Town House" && true}>
                  Town House
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={() => {
                    setActive("Apartment");
                  }}
                  active={active === "Apartment" && true}>
                  Apartment
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={() => {
                    setActive("Office");
                  }}
                  active={active === "Office" && true}>
                  Office
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent id='tabsContent' className='tab-content' activeTab={active}>
              <TabPane tabId='Morden Villa'>
                <ModernTabSection tabData={value?.LatestPropertyListingInEnterprise.slice(0, 3)} />
              </TabPane>
              <TabPane tabId='Family House'>
                <ModernTabSection tabData={value?.LatestPropertyListingInEnterprise.slice(3, 6)} />
              </TabPane>
              <TabPane tabId='Town House'>
                <ModernTabSection tabData={value?.LatestPropertyData.slice(0, 3)} />
              </TabPane>
              <TabPane tabId='Apartment'>
                <ModernTabSection tabData={value?.LatestPropertyData.slice(3, 6)} />
              </TabPane>
              <TabPane tabId='Office'>
                <ModernTabSection tabData={value?.LatestPropertyListingInEnterprise.slice(2, 5)} />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyTabSection;
