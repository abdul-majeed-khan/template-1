/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */
"use client";
import React, { Fragment } from "react";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/blogPage/sidebarPage";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";

const LeftSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"} />
      <FooterThree />
    </Fragment>
  );
};

export default LeftSidebar;
