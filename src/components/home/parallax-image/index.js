/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import AboutSection from "../corporate/About";
import BannerSection from "../corporate/Banner";
import BlogSection from "../corporate/Blog";
import FeaturePropertySection from "../corporate/FeatureProperty";
import PricingSection from "../corporate/Pricing";
import PropertySection from "../corporate/Property";
import ServiceSection from "../corporate/Service";
import TestimonialSection from "../corporate/Testimonial";
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
      <div className="section-pb">
        <PropertySection value={value?.PropertyListing} />
      </div>
      <FeaturePropertySection value={value?.FeaturedPropertyInCorporateLayout} />
      <div className="service-section-pt-0">
        <ServiceSection value={AppPropertyData.ProvidedServices} />
      </div>
      <PropertySection value={value?.PropertyListing} size={3} />
      <PricingSection value={AppPropertyData.PricingPlan} />
      <BannerSection banner={7} />
      <AboutSection value={clientData?.OurAgentInCorporateLayout} />
      <TestimonialSection value={clientData?.OurClientInCorporateLayout} />
      <BlogSection value={value?.LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
