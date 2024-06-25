import React, { Fragment } from "react";
import ParallaxBannerSection from "@/components/home/enterprise/ParallaxBanner";
import BannerSectionOne from "@/components/home/slider-filter-search/Banner";
import BannerSectionTwo from "@/components/home/corporate/Banner";
import BrandSection from "@/components/home/enterprise/Brand";

const BodyContent = () => {
  return (
    <Fragment>
      <div className="section-parallax-pt">
        <ParallaxBannerSection />
      </div>
      <BannerSectionOne purple={true} />
      <BannerSectionTwo banner={3} />
      <BrandSection />
    </Fragment>
  );
};

export default BodyContent;
