/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { Fragment, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import PropertySection from "../slider-filter-search/Property";
import FeatureSection from "../slider-filter-search/Feature";
import BannerSection from "../slider-filter-search/Banner";
import CitiesWisePropertySection from "../slider-filter-search/CitiesWiseProperty";
import TestimonialSection from "../slider-filter-search/Testimonial";
import AboutSection from "../slider-filter-search/About";
import OfferSection from "../slider-filter-search/Offer";
import { AppPropertyData } from "@/data/appPropertyData";
import BrandSection from "./Brand";
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
    <Fragment>
      <HomeBannerSection />
      <PropertySection value={value?.LatestPropertyData} />
      <FeatureSection value={value?.FeaturedProperty} />
      <PropertySection value={value?.LatestPropertyData} range={[1, 4]} />
      <BannerSection />
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <TestimonialSection value={clientData?.HappyClient} normal={false} />
      <AboutSection value={clientData?.MeetOurAgent} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
