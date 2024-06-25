/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns The GoogleMap component is being returned.
 */
"use client";
import React, { Fragment } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import MapView from "@/components/listing/gridView/map/MapView";
import Google from "@/components/listing/gridView/map/GoogleMap";

const GoogleMap = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"left"}>
        <Google />
      </MapView>
      <FooterThree />
    </Fragment>
  );
};

export default GoogleMap;
