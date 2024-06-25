/* A dynamic import. */
"use client";
import React, { Fragment, useState } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import GridView from "@/components/listing/gridView/grid/GridView";
import MapModal from "@/components/listing/gridView/MapModal";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(() => import("@/components/listing/gridView/map/LeafletMap"), {
  ssr: false,
});

const LeafletMap = () => {
  const [mapModal, setMapModal] = useState(false);
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <GridView side={"left"} size={2} gridType={"grid-view"} mapModal={true} mapView={true} gridBar={true} setMapModal={setMapModal} />
      <MapModal mapModal={mapModal} setMapModal={setMapModal}>
        <MyAwesomeMap />
      </MapModal>
      <FooterThree />
    </Fragment>
  );
};

export default LeafletMap;
