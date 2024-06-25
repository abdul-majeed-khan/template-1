/**
 * It takes the locale from the context and returns the translations for the given namespaces
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import NavbarFour from "@/layout/headers/NavbarFour";
import FooterThree from "@/layout/footers/FooterThree";
import BodyContent from "@/components/home/modern-video";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const ModernVideo = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor && document.documentElement.style.setProperty("--theme-default", "#ff5c41");
      !ConfigDB.SecondaryColor && document.documentElement.style.setProperty("--theme-default2", "#ff8c41");
    }, 0.1);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>sheltos</title>
      </Head>
      <NavbarFour />
      <BodyContent />
      <FooterThree />
    </Fragment>
  );
};

export default ModernVideo;
