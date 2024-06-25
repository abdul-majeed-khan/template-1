"use client";
import BodyContent from "@/components/modules/service";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import { Fragment } from "react";

const FullBanner = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default FullBanner;
