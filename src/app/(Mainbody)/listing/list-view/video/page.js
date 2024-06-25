/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns a React component.
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
      <div className="video-property">
      <GridView side={false} size={3} gridType={"list-view"} listSize={2} relativeSlider={true} gridBar={false} video={true} AdvancedSearchShow={true} />
      </div>
      <FooterThree />;
    </Fragment>
  );
};

export default ThumbnailImage;
