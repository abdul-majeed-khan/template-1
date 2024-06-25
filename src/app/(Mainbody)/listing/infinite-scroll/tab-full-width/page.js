/**
 * It takes the locale from the context and returns the props for the page
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import GridView from "@/components/listing/gridView/grid/GridView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const NoSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} gridType={"grid-view"} gridBar={false} tabHeader={true} AdvancedSearchShow={true} infiniteScroll={true} />
      <FooterThree />
    </Fragment>
  );
};

export default NoSidebar;
