/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import GridView from "@/components/listing/gridView/grid/GridView";

const NoSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={2} gridType={"grid-view"} listSize={2} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default NoSidebar;
