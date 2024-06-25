/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns The GoogleMap component is being returned.
 */
"use client";
import NavbarThree from "@/layout/headers/NavbarThree";
import Google from "@/components/listing/gridView/map/GoogleMap";
import MapView from "@/components/listing/gridView/map/MapView";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import { Fragment } from "react";

const GoogleMap = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <MapView gridType={"grid-view"} side={"right"}>
        <Google />
      </MapView>
      <FooterThree />
    </Fragment>
  );
};

export default GoogleMap;
