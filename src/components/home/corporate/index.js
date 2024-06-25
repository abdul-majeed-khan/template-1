/**
 * It fetches data from the API and renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import AboutSection from "./About";
import BannerSection from "./Banner";
import BlogSection from "./Blog";
import FeaturePropertySection from "./FeatureProperty";
import HomeBannerSection from "./HomeBanner";
import PricingSection from "./Pricing";
import PropertySection from "./Property";
import ServiceSection from "./Service";
import TestimonialSection from "./Testimonial";

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
      <HomeBannerSection value={AppPropertyData.corporateLayoutHomeBanner} />
      <PropertySection value={value?.PropertyListing} size={3} />
      <ServiceSection value={AppPropertyData.ProvidedServices} />
      <PropertySection value={value?.PropertyListing} />
      <PricingSection value={AppPropertyData.PricingPlan} />
      <FeaturePropertySection value={value?.FeaturedPropertyInCorporateLayout} />
      <BannerSection banner={3} />
      <AboutSection value={clientData?.OurAgentInCorporateLayout} />
      <TestimonialSection value={clientData?.OurClientInCorporateLayout} />
      <BlogSection value={value?.LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
