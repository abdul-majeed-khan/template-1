/**
 * It takes the locale from the context and returns the props for the page
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/pages/portfolio/centerSlides";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarFive from "@/layout/headers/NavbarFive";

const parallax = () => {
  return (
    <Fragment>
      <NavbarFive />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default parallax;
