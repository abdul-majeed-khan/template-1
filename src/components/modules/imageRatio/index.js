import React, { Fragment } from "react";
import Ratio2_3Section from "./Ratio2_3";
import RatioDescriptionSection from "./RatioDescription";
import RatioPortraitSection from "./RatioPortrait";
import RatioSquareSection from "./RatioSquare";

const BodyContent = () => {
  return (
    <Fragment>
      <RatioDescriptionSection />
      <Ratio2_3Section />
      <RatioSquareSection />
      <RatioPortraitSection />
    </Fragment>
  );
};

export default BodyContent;
