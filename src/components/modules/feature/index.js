import { AppPropertyData } from "@/components/../data/appPropertyData";
import FeaturedPropertySection from "@/components/home/classic/FeaturedProperty";
import FeaturedPropertySectionOne from "@/components/home/corporate/FeatureProperty";
import FeatureSectionOne from "@/components/home/enterprise/Feature";
import FeatureSection from "@/components/home/slider-filter-search/Feature";
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
      <FeaturedPropertySection value={value?.FeaturedPropertyInClassicLayout} />
      <div className="section-pb">
        <FeatureSection value={value?.FeaturedProperty} />
      </div>
      <FeaturedPropertySectionOne value={value?.FeaturedPropertyInCorporateLayout} />
      <FeatureSectionOne value={AppPropertyData.FeaturedCitiesInEnterprise} />
    </Fragment>
  );
};

export default BodyContent;
