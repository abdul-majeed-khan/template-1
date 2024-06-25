"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import PropertyCompare from "@/components/pages/userPanel/compareproperty";

const CompareProperty = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <PropertyCompare />
      <FooterThree />
    </Fragment>
  );
};

export default CompareProperty;
