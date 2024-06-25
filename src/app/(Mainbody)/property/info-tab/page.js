/**
 * It takes a locale as an argument and returns a props object with the locale and the translations for
 * the common namespace
 * @returns The return value of the function is an object with a props property.
 */
"use client";
import React, { Fragment } from "react";
import BodyContent from "@/components/property/tabPanelPages";
import VideoSection from "@/components/property/tabPanelPages/Video";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarFive from "@/layout/headers/NavbarFive";


const InfoTab = () => {
  return (
    <Fragment>
      <NavbarFive />
      <BodyContent imgSection={true}>
        <VideoSection />
      </BodyContent>
      <FooterThree />
    </Fragment>
  );
};

export default InfoTab;
