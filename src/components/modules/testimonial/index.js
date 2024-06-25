import React, { Fragment, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import TestimonialSectionOne from "@/components/home/enterprise/Testimonial";
import TestimonialSectionTwo from "@/components/home/slider-filter-search/Testimonial";
import TestimonialSectionThree from "@/components/home/corporate/Testimonial";
import TestimonialSectionFour from "@/components/home/classic/Testimonial";

const BodyContent = () => {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    getData(`/api/client-agent`)
      .then((res) => {
        setClientData(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <Fragment>
      <TestimonialSectionOne value={clientData?.WhatPeopleSay} />
      <TestimonialSectionTwo value={clientData?.HappyClient} normal={false} />
      <TestimonialSectionThree value={clientData?.OurClientInCorporateLayout} />
      <TestimonialSectionFour value={clientData?.OurHappyClientInClassicLayout} />
    </Fragment>
  );
};

export default BodyContent;
