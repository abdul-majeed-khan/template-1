/**
 * It takes the locale from the context and returns the translated strings for the given namespaces
 * @returns a React component.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/pages/blogPage/sidebarPage";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const NoSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={false} />
      <FooterThree />
    </Fragment>
  );
};

export default NoSidebar;
