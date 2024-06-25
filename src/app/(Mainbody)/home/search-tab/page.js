/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import BodyContent from "@/components/home/search-tab";
import { ConfigDB } from "@/config/themeCustomizerConfig";
import FooterFour from "@/layout/footers/FooterFour";
import NavbarFour from "@/layout/headers/NavbarFour";
import { Fragment, useEffect } from "react";

const SearchTab = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#f35d43");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#f34451");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarFour />
      <BodyContent />
      <FooterFour />
    </Fragment>
  );
};

export default SearchTab;
