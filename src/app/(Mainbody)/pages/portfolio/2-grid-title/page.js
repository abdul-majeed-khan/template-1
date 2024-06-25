/* A component that is being imported. */
"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/grid/index.js"), {
  ssr: false,
});

const GridTitle2 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent title={true} size={6} />
      <FooterThree />
    </Fragment>
  );
};

export default GridTitle2;
