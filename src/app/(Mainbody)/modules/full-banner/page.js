"use client";
import BodyContent from "@/components/modules/fullBanner";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import { Fragment } from "react";

const FullBanner = () => {
  return (
    <Fragment>
      <NavbarThree />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default FullBanner;
