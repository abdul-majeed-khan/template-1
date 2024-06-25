/**
 * It takes in an array of objects and returns a Slider component with a PropertyBoxFive component for
 * each object in the array
 * @returns The LatestPropertySection component is being returned.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail } from "@/constValues/constValues";
import { property4 } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";
import PropertyBoxFive from "../../elements/propertyBoxs/PropertyBoxFive";

const LatestPropertySection = ({ value }) => {
  return (
    <section className="property-section slick-between slick-shadow">
      <Container>
        <Row className=" ratio_landscape">
          <Col>
            <div className="title-3 text-start">
              <h2>Latest Property</h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <NoSsr>
              <Slider className="property-4 arrow-gradient arrow-right list-property" {...property4}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <PropertyBoxFive data={data} />
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestPropertySection;
