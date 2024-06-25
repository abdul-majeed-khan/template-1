"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import BodyContent from "@/components/pages/other-pages/aboutUs1";

const AboutUs1 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default AboutUs1;
