import React from "react";
import { Col } from "reactstrap";
import PropertyBox from "../../../elements/propertyBoxs/PropertyBox";

const ModernTabSection = ({ tabData }) => {
  return (
    <div className="tab-pane fade show">
      <div className="property-2 row column-space zoom-gallery">
        {tabData?.map((data, i) => (
          <Col xl="4" md="6" key={i}>
            <PropertyBox data={data} />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ModernTabSection;
