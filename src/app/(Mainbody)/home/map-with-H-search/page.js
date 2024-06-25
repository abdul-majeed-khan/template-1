/**
 * It takes a locale as an argument, and returns an object with the translations for that locale
 * @returns The return value of the function is the props object.
 */
"use client";
import BodyContent from "@/components/home/map-with-search";
import { ConfigDB } from "@/config/themeCustomizerConfig";
import FooterFour from "@/layout/footers/FooterFour";
import NavbarFour from "@/layout/headers/NavbarFour";
import { Fragment, useEffect } from "react";

const MapWithHSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#ff5c41");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#ff8c41");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarFour />
      <BodyContent map={"HSearch"} />
      <FooterFour />
    </Fragment>
  );
};

export default MapWithHSearch;
