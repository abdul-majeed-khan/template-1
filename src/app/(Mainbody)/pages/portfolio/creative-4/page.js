/* A way to import a component that is not needed to be rendered on the server side. */
"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/creative/index.js"), {
  ssr: false,
});
const Creative4 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default Creative4;
