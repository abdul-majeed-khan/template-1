/* A code snippet. */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import dynamic from "next/dynamic";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/grid/index.js"), {
  ssr: false,
});
 
const Grid2 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent size={6} />
      <FooterThree />
    </Fragment>
  );
};

export default Grid2;
