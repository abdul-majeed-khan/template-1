/**
 * `getStaticProps` is a Next.js function that fetches data at build time
 * @returns A function that returns a component.
 */
"use client";
import React, { Fragment } from "react";
import GridView from "@/components/listing/gridView/grid/GridView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const TabRightSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"right"} size={3} gridType={"grid-view"} gridBar={false} tabHeader={true} infiniteScroll={true} />
      <FooterThree />
    </Fragment>
  );
};

export default TabRightSidebar;
