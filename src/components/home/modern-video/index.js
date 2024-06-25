/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import BrandSection from "../enterprise/Brand";
import FeatureSection from "../enterprise/Feature";
import LatestBlogSection from "../enterprise/LatestBlog";
import ParallaxBannerSection from "../enterprise/ParallaxBanner";
import PropertyOfTheDaySection from "../enterprise/PropertyOfTheDay";
import PropertyServicesSection from "../enterprise/Propertyservices";
import PropertyTabSection from "../enterprise/PropertyTab";
import TestimonialSection from "../enterprise/Testimonial";
import HomeBannerSection from "./HomeBanner";
import LatestPropertyListingSection from "./LatestPropertyListing";

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
      <LatestPropertyListingSection value={value?.ListingPropertyInModernVideoLayout} />
      <PropertyTabSection value={value} />
      <PropertyOfTheDaySection value={value?.PropertyOfTheDay} />
      <PropertyServicesSection value={AppPropertyData?.PropertyServices} />
      <FeatureSection value={AppPropertyData?.FeaturedCitiesInEnterprise} />
      <ParallaxBannerSection />
      <TestimonialSection value={clientData?.WhatPeopleSay} />
      <LatestBlogSection value={value?.LatestBlogInEnterprise} />
      <BrandSection />
    </>
  );
};

export default BodyContent;
