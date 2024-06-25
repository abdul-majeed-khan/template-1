/**
 * It takes a locale and an array of namespaces as arguments and returns an object with the
 * translations for the given locale and namespaces
 * @returns The PigeonMap component is being returned.
 */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import MapView from "@/components/listing/gridView/map/MapView";
import Pigeon from "@/components/listing/gridView/map/PigeonMap";

const PigeonMap = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"left"}>
        <Pigeon />
      </MapView>
      <FooterThree />
    </Fragment>
  );
};

export default PigeonMap;
