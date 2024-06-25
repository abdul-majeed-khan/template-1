import React, { Fragment } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import PropertyServicesSectionTwo from "@/components/home/classic/PropertyServices";
import ServiceSection from "@/components/home/corporate/Service";
import PropertyServicesSectionOne from "@/components/home/enterprise/Propertyservices";

const BodyContent = () => {
  return (
    <Fragment>
      <div className="bg-light">
        <PropertyServicesSectionOne value={AppPropertyData.PropertyServices} />
      </div>
      <ServiceSection value={AppPropertyData.ProvidedServices} />
      <PropertyServicesSectionTwo value={AppPropertyData.PropertyServicesInClassic} />
    </Fragment>
  );
};

export default BodyContent;
