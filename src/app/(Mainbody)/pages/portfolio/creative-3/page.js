/* A dynamic import. */
"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/creative/index.js"), {
  ssr: false,
});
const Creative3 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent size={"small"} />
      <FooterThree />
    </Fragment>
  );
};

export default Creative3;
