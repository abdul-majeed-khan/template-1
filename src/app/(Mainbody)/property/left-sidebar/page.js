/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/stickyTabOrClassic";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const LeftSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <BodyContent side={"left"} />
      <FooterThree />
    </Fragment>
  );
};

export default LeftSidebar;
