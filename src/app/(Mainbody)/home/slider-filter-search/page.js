"use client";
import BodyContent from "@/components/home/slider-filter-search";
import { ConfigDB } from "@/config/themeCustomizerConfig";
import FooterOne from "@/layout/footers/FooterOne";
import NavbarOne from "@/layout/headers/NavbarOne";
import { Fragment, useEffect } from "react";

const SliderFilterSearch = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#2c2e97");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#4b55c4");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarOne />
      <BodyContent />
      <FooterOne />
    </Fragment>
  );
};

export default SliderFilterSearch;
