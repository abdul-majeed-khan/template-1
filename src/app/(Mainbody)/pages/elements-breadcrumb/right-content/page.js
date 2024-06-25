"use client";
import React, { Fragment } from "react";
import GridView from "@/components/listing/gridView/grid/GridView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const RightContent = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb right={true} />
      <GridView side={"right"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default RightContent;
