/**
 * It takes the locale from the request and returns the translations for the given namespaces
 * @returns an object with a property of props. The props property is an object with a property of
 * ...(await serverSideTranslations(locale, ['common']))
 */
"use client";
import React, { Fragment, useEffect } from "react";
import NavbarFour from "@/layout/headers/NavbarFour";
import FooterFour from "@/layout/footers/FooterFour";
import BodyContent from "@/components/home/classic";
import { ConfigDB } from "@/config/themeCustomizerConfig";

const Classic = () => {
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

export default Classic;
