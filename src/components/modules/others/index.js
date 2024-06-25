import SubscribeSection from "@/components/home/classic/Subscribe";
import VideoSection from "@/components/home/classic/Video";
import PricingSection from "@/components/home/corporate/Pricing";
import PropertyOfTheDaySection from "@/components/home/enterprise/PropertyOfTheDay";
import CitiesWisePropertySection from "@/components/home/slider-filter-search/CitiesWiseProperty";
import OfferSection from "@/components/home/slider-filter-search/Offer";
import { AppPropertyData } from "@/data/appPropertyData";
import { getData } from "@/utils/getData";
import { Fragment, useEffect, useState } from "react";

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
      <CitiesWisePropertySection value={value?.FindPropertiesInTheseCities} />
      <OfferSection value={AppPropertyData.OurNewOffer} />
      <VideoSection />
      <PropertyOfTheDaySection value={value?.PropertyOfTheDay} />
      <PricingSection value={AppPropertyData.PricingPlan} />
      <SubscribeSection />
    </Fragment>
  );
};

export default BodyContent;
