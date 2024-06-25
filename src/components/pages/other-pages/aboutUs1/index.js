import React, { Fragment, useEffect, useState } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import TestimonialSection from "../../../home/classic/Testimonial";
import BlogSection from "../../../home/corporate/Blog";
import BrandSection from "../../../home/enterprise/Brand";
import PropertyServicesSection from "../../../home/enterprise/Propertyservices";
import AboutUsSection from "./AboutUs";

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
      <AboutUsSection />
      <div className="bg-light">
        <PropertyServicesSection value={AppPropertyData.PropertyServices} />
      </div>
      <TestimonialSection value={clientData?.OurHappyClientInClassicLayout} />
      <div className="bg-light">
        <BlogSection value={value?.LatestBlogInCorporate} />
      </div>
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
