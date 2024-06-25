/* A dynamic import. */
"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/grid/index.js"), {
  ssr: false,
});

const Grid3 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent gridClass='col-lg-3' title={true} size={8} />
      <FooterThree />
    </Fragment>
  );
};

export default Grid3;
