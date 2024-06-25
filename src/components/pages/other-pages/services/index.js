import React, { useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import BlogSection from "../../../home/corporate/Blog";
import PropertyServicesSection from "../../../home/enterprise/Propertyservices";
import TestimonialSection from "../../../home/enterprise/Testimonial";
import ServiceSection from "./Service";

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
      <ServiceSection />
      <PropertyServicesSection value={AppPropertyData.PropertyServices} />
      <div className="bg-light">
        <TestimonialSection value={clientData?.WhatPeopleSay} />
      </div>      
      <BlogSection value={value?.LatestBlogInCorporate} />
    </>
  );
};

export default BodyContent;
