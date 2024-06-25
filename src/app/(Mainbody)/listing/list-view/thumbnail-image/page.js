/**
 * It takes a locale as an argument and returns a props object with the locale and the translations for
 * the common namespace
 * @returns A function that returns a React element.
 */
"use client";
import React, { Fragment } from "react";
import GridView from "@/components/listing/gridView/grid/GridView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";


const ThumbnailImage = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={false} size={3} gridType={"list-view"} listSize={2} relativeSlider={true} gridBar={false} AdvancedSearchShow={true} />
      <FooterThree />;
    </Fragment>
  );
};

export default ThumbnailImage;
