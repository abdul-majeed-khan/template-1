/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
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
      <GridView side={"right"} size={2} gridType={"grid-view"} gridBar={false} tabHeader={true} />
      <FooterThree />
    </Fragment>
  );
};

export default TabRightSidebar;
