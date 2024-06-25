"use client";
import BodyContent from "@/components/modules/others";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import { Fragment } from "react";

const Others = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default Others;
