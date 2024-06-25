/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns an object with a property called props.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/tabPanelPages";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarFive from "@/layout/headers/NavbarFive";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const TemplateBreadcrumb = () => {
  return (
    <Fragment>
      <NavbarFive />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default TemplateBreadcrumb;
