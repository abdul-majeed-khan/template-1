/**
 * It takes the locale from the context and returns the translated strings for the given namespaces
 * @returns an object with a property called props. The props property is an object that contains the
 * translations for the current locale.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/pages/blogPage/mixGridSidebar";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const MixGridRightSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"right"} />
      <FooterThree />
    </Fragment>
  );
};
export default MixGridRightSidebar;
