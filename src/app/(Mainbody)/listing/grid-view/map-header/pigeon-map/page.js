/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The PigeonMap component is being returned.
 */
"use client";
import GridView from "@/components/listing/gridView/grid/GridView";
import Pigeon from "@/components/listing/gridView/map/PigeonMap";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarSix from "@/layout/headers/NavbarSix";
import { Fragment } from "react";

const PigeonMap = () => {
  return (
    <Fragment>
      <NavbarSix />
      <section className='layout-map header-map'>
        <Pigeon />
      </section>
      <GridView side={"left"} size={2} gridType={"grid-view"} gridBar={true} />
      <FooterThree />
    </Fragment>
  );
};

export default PigeonMap;
