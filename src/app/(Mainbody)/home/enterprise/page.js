/**
 * It takes a locale as an argument and returns an object with the translations for that locale
 * @returns The Enterprise component is being returned.
 */
"use client";
import { Fragment, useEffect } from "react";
import NavbarThree from "@/layout/headers/NavbarThree";
import BodyContent from "@/components/home/enterprise";
import FooterThree from "@/layout/footers/FooterThree";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const Enterprise = () => {
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

export default Enterprise;
