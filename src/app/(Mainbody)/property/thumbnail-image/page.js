/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/tabPanelPages";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarFive from "@/layout/headers/NavbarFive";

const ThumbnailImage = () => {
  return (
    <Fragment>
      <NavbarFive />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default ThumbnailImage;
