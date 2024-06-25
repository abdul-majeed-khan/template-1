import React, { Fragment, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import AboutSectionOne from "@/components/home/slider-filter-search/About";
import AboutSectionTwo from "@/components/home/corporate/About";
import AboutSectionThree from "@/components/home/classic/About";

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
      <AboutSectionOne value={clientData?.MeetOurAgent} />
      <div className="bg-light section-pb">
        <AboutSectionTwo value={clientData?.OurAgentInCorporateLayout} />
      </div>
      <AboutSectionThree value={clientData?.OurAgentInClassicLayout} />
    </Fragment>
  );
};

export default BodyContent;
