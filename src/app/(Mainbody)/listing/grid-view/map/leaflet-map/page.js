/* A way to import a component that is not SSR friendly. */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import MapView from "@/components/listing/gridView/map/MapView";
import FooterThree from "@/layout/footers/FooterThree";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(() => import("@/components/listing/gridView/map/LeafletMap"), {
  ssr: false,
});


const LeafletMap = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"right"}>
        <MyAwesomeMap />
      </MapView>
      <FooterThree />
    </Fragment>
  );
};

export default LeafletMap;
