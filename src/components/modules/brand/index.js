import React, { Fragment } from "react";
import BrandOne from "../../home/enterprise/Brand";
import BrandTwo from "@/components/home/image-with-content/Brand";
import BrandFour from "@/components/home/classic/Brand";

const BodyContent = () => {
  return (
    <Fragment>
      <BrandOne />
      <BrandTwo />
      <BrandFour />
    </Fragment>
  );
};

export default BodyContent;
