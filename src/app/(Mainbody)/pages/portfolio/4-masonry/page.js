/* A code snippet. */
"use client";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";

const DynamicBodyContent = dynamic(() => import("@/components/pages/portfolio/Masonry/index"), {
  ssr: false,
});
const Masonry4 = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <DynamicBodyContent masonryGrid={4} />
      <FooterThree />
    </Fragment>
  );
};

export default Masonry4;
