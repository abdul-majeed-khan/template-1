/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/portfolio/details";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const details = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default details;
