/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import GridView from "@/components/listing/gridView/grid/GridView";

const Slider = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} listSize={2} gridType={"list-view"} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default Slider;
