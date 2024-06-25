/**
 * It takes in a value and size, and returns a section with a container, row, and column
 * @returns A React component
 */
import { Col, Container, Row } from "reactstrap";
import { propertyDescription, propertyListing } from "@/constValues/constValues";
import PropertyBoxThree from "../../elements/propertyBoxs/PropertyBoxThree";

const PropertySection = ({ value, size }) => {
  return (
    <section className='property-section pb-0'>
      <Container fluid={size && true}>
        <Row className='ratio_63 zoom-gallery property-box-flat'>
          <Col>
            <div className='title-3'>
              <svg className='title-svg'>
                <use xlinkHref='/assets/svg/icons.svg#title-line'></use>
              </svg>
              <h2 dangerouslySetInnerHTML={{ __html: propertyListing }}></h2>
              <p className='font-roboto'>{propertyDescription}</p>
            </div>
            <Row className={`column-space ${size && "no-slider-property"}`}>
              {value &&
                value.slice(0, `${size ? 8 : 6}`).map((data, i) => (
                  <Col xl='4' md='6' xxl={size && size} className='wow fadeInUp' key={i}>
                    <PropertyBoxThree data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertySection;
