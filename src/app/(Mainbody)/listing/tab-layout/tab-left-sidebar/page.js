/**
 * It takes a locale and an array of namespaces and returns an object with the translations for those
 * namespaces
 * @returns a React component.
 */
"use client";
import GridView from "@/components/listing/gridView/grid/GridView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import { Fragment } from "react";

const LeftSidebar = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={3} gridType={"grid-view"} gridBar={false} tabHeader={true} />
      <FooterThree />
    </Fragment>
  );
};

export default LeftSidebar;
