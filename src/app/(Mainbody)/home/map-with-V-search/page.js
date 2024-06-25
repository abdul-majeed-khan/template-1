/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is the props object.
 */
"use client";
import React, { Fragment, useEffect } from "react";
import NavbarFour from "@/layout/headers/NavbarFour";
import FooterFour from "@/layout/footers/FooterFour";
import BodyContent from "@/components/home/map-with-search";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const MapWithVSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#ff5c41");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#ff8c41");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarFour />
      <BodyContent map={"VSearch"} />
      <FooterFour />
    </Fragment>
  );
};

export default MapWithVSearch;
