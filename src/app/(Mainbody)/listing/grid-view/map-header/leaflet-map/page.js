/* A way to import a component that is not SSR compatible. */
"use client";
import React, { Fragment } from "react";
import NavbarSix from "@/layout/headers/NavbarSix";
import FooterThree from "@/layout/footers/FooterThree";
import GridView from "@/components/listing/gridView/grid/GridView";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(() => import("@/components/listing/gridView/map/LeafletMap"), {
  ssr: false,
});

const LeafletMap = () => {
  return (
    <Fragment>
      <NavbarSix />
      <section className='layout-map header-map'>
        <MyAwesomeMap />
      </section>
      <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default LeafletMap;
