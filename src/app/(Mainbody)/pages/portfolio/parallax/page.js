/**
 * It takes the locale from the request object and returns the translated strings for the given
 * namespaces
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/pages/portfolio/parallax";
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
