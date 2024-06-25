/**
 * @returns The PigeonMap component is being returned.
 */
"use client";
import React, { Fragment } from "react";
import NavbarFive from "@/layout/headers/NavbarFive";
import Breadcrumb3 from "@/layout/Breadcrumb/Breadcrumb3";
import FooterThree from "@/layout/footers/FooterThree";
import MapView from "@/components/listing/gridView/map/MapView";
import Pigeon from "@/components/listing/gridView/map/PigeonMap";

const PigeonMap = () => {
  return (
    <Fragment>
      <NavbarFive />
      <Breadcrumb3 />
      <MapView gridType={"list-view"} side={"right"}>
        <Pigeon />
      </MapView>
      <FooterThree />
    </Fragment>
  );
};

export default PigeonMap;

