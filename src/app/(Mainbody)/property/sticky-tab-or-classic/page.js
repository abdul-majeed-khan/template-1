/**
 * It takes a locale as an argument and returns a props object with the translations for the given
 * locale
 * @returns an object with a property called props.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/stickyTabOrClassic";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";


const StickyTabOrClassic = () => {
  return (
    <Fragment>
      <NavbarThree />
      <BodyContent side={"right"} />
      <FooterThree />
    </Fragment>
  );
};

export default StickyTabOrClassic;
