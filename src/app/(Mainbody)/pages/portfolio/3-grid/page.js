/* A way to import a component that is not needed to be rendered on the server side. */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import dynamic from "next/dynamic";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/grid/index.js"), {
  ssr: false,
});

const Grid3 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent gridClass='col-lg-4' />
      <FooterThree />
    </Fragment>
  );
};

export default Grid3;
