import React, { Fragment } from "react";
import { AppPropertyData } from "@/data/appPropertyData";
import PricingSection from "../../../home/corporate/Pricing";

const BodyContent = () => {
  return (
    <Fragment>
      <PricingSection value={AppPropertyData.PricingPlan} />
    </Fragment>
  );
};

export default BodyContent;
