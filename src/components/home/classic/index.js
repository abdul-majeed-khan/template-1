/**
 * It fetches data from the API and passes it to the components
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { Fragment, useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import AboutSection from "./About";
import BrandSection from "./Brand";
import FeaturedPropertySection from "./FeaturedProperty";
import HomeBannerSection from "./HomeBanner";
import LatestPropertySection from "./LatestProperty";
import ListingPropertySection from "./ListingProperty";
import PropertyServicesSection from "./PropertyServices";
import SubscribeSection from "./Subscribe";
import TestimonialSection from "./Testimonial";
import VideoSection from "./Video";

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
      <HomeBannerSection value={value?.HomeBannerDataInClassicLayout} />
      <LatestPropertySection value={value?.LatestPropertyInClassicLayout} />
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <PropertyServicesSection value={AppPropertyData.PropertyServicesInClassic} />
      <ListingPropertySection value={value?.ListingPropertyInClassicLayout} />
      <VideoSection />
      <AboutSection value={clientData?.OurAgentInClassicLayout} />
      <SubscribeSection />
      <TestimonialSection value={clientData?.OurHappyClientInClassicLayout} />
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
