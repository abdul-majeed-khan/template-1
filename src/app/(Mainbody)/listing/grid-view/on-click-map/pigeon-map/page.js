/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property. This object is passed
 * to the component as props.
 */
"use client";
import React, { Fragment, useState } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import GridView from "@/components/listing/gridView/grid/GridView";
import Pigeon from "@/components/listing/gridView/map/PigeonMap";

const PigeonMap = () => {
  const [mapModal, setMapModal] = useState(false);
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} mapModal={true} mapView={true} gridBar={true} setMapModal={setMapModal}>
        <div className={`onclick-map ${mapModal ? "d-block" : "d-none"}`}>
          <Pigeon />
        </div>
      </GridView>
      <FooterThree />
    </Fragment>
  );
};

export default PigeonMap;
