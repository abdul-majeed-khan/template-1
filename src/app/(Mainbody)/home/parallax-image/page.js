/**
 * It takes a locale as an argument and returns a props object with the locale and the translations for
 * the common namespace
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import React, { Fragment, useEffect } from "react";
import { Logo5 } from "@/components/elements/Logo";
import NavbarTwo from "@/layout/headers/NavbarTwo";
import FooterTwo from "@/layout/footers/FooterTwo";
import BodyContent from "@/components/home/parallax-image";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const ParallaxImage = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#00968a");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#00968a");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <NavbarTwo logo={<Logo5 />} />
      <BodyContent />
      <FooterTwo />
    </Fragment>
  );
};

export default ParallaxImage;
