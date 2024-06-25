/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props. The value of the props property is an object with a
 * property called locale. The value of the locale property is the locale that was passed to the
 * function.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/tabPanelPages";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarFive from "@/layout/headers/NavbarFive";

const WithoutTop = () => {
  return (
    <Fragment>
      <NavbarFive />
      <BodyContent imgSection={true} />
      <FooterThree />
    </Fragment>
  );
};

export default WithoutTop;
