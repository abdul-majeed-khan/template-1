/**
 * It returns a JSX element that contains two other components
 * @returns A React component
 */
import React, { Fragment } from "react";
import DownloadAppSection from "./DownloadApp";
import GetInTouchSection from "./GetInTouch";

const BodyContent = () => {
  return (
    <Fragment>
      <GetInTouchSection />
      <DownloadAppSection />
    </Fragment>
  );
};

export default BodyContent;
