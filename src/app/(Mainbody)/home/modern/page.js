/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import React, { Fragment, useEffect } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import FooterThree from "@/layout/footers/FooterThree";
import BodyContent from "@/components/home/modern";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const Modern = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#ff5c41");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#ff8c41");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarThree />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default Modern;
