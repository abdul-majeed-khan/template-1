/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import FeaturedPropertySection from "../classic/FeaturedProperty";
import LatestPropertySection from "../classic/LatestProperty";
import PropertyServicesSection from "../classic/PropertyServices";
import SubscribeSection from "../classic/Subscribe";
import TestimonialSection from "../classic/Testimonial";
import VideoSection from "../classic/Video";
import SalePropertySection from "../slider-filter-search/SaleProperty";
import AboutSection from "../classic/About";
import BrandSection from "../classic/Brand";
import HomeBannerSection from "./HomeBanner";

const BodyContent = () => {
  const [value, setValue] = useState();
  const [clientData, setClientData] = useState();

  useEffect(() => {
    getData(`/api/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <>
      <HomeBannerSection />
      <SalePropertySection value={value?.LatestForSalePropertyData} />
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <PropertyServicesSection value={AppPropertyData.PropertyServicesInClassic} />
      <LatestPropertySection value={value?.LatestPropertyInClassicLayout} />
      <VideoSection />
      <TestimonialSection value={clientData?.OurHappyClientInClassicLayout} />
      <SubscribeSection />
      <AboutSection value={clientData?.OurAgentInClassicLayout} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
