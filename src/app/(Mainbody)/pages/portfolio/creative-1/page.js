/**
 * It takes a locale as an argument and returns an object with the props key and the value of the props
 * key is an object with the key of ...(await serverSideTranslations(locale, ['common']))
 * @returns The return value of the function is an object with a props property.
 */
"use client"
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/portfolio/creative1";

const Creative1 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default Creative1;
