import React, { Fragment, useEffect, useState } from "react";
import { getData } from "@/utils/getData";
import LatestPropertySection from "@/components/home/enterprise/LatestProperty";
import LatestPropertySectionOne from "@/components/home/classic/LatestProperty";
import PropertySection from "@/components/home/slider-filter-search/Property";
import PropertySectionOne from "@/components/home/corporate/Property";
import SalePropertySection from "@/components/home/slider-filter-search/SaleProperty";

const BodyContent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    getData(`/api/property`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <Fragment> 
      <div className="bg-light">
        <PropertySection value={value?.LatestPropertyData} />
      </div>
      <LatestPropertySection value={value?.LatestPropertyListingInEnterprise.slice(0, 3)} />
      <div className="bg-light section-pb">
        <PropertySectionOne value={value?.PropertyListing} size={3} />
      </div>
      <LatestPropertySectionOne value={value?.LatestPropertyInClassicLayout} />
      <div className="bg-light">
        <SalePropertySection value={value?.LatestForSalePropertyData} />
      </div>
    </Fragment>
  );
};

export default BodyContent;
