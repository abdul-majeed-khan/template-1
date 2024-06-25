/**
 * It returns a fragment containing the GetInTouchSection and ContactDetailsSection components
 * @returns A React component
 */
import { Fragment } from "react";
import ContactDetailsSection from "./ContactDetails";
import GetInTouchSection from "./GetInTouch";

const BodyContent = () => {
  return (
    <Fragment>
     <div className="contact-1">
        <GetInTouchSection />
      </div>
      <ContactDetailsSection />      
    </Fragment>
  );
};

export default BodyContent;
