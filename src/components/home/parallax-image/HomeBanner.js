import Link from "next/link";
import React, { Fragment, useState } from "react";
import { MapPin } from "react-feather";
import { useDispatch } from "react-redux";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";

const HomeBannerSection = () => {
  const [toggle, setToggle] = useState(false);
  const [dropDownInput, setDropDownInput] = useState("Apartment");
  const dispatch = useDispatch();

  return (
    <section className="parallax-home video-layout">
      <Container>
        <Row>
          <Col lg="7" md="9">
            <div className="parallax-content">
              <div className="box text-affect">
                <div className="title">
                  <span className="block"></span>
                  <h1>
                    Luxury
                    <br /> Apartment
                  </h1>
                </div>
                <div className="role">
                  <div className="block"></div>
                  <p className="font-roboto">Limited time offer.Hurry up !!</p>
                </div>
              </div>
              <form className="video-search">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <MapPin />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search location"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <Dropdown isOpen={toggle} toggle={() => setToggle(!toggle)}>
                  <DropdownToggle className="font-roboto">
                    <Fragment>
                      {dropDownInput}
                      <i className="fas fa-angle-down"></i>
                    </Fragment>
                  </DropdownToggle>
                  <DropdownMenu className=" text-start">
                    <DropdownItem
                      onClick={() => {
                        setDropDownInput("Any property type");
                        dispatch({
                          type: "propertyType",
                          payload: "Property Type",
                        });
                      }}
                    >
                      <Fragment>Any property type</Fragment>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setDropDownInput("Office");
                        dispatch({
                          type: "propertyType",
                          payload: "Offices",
                        });
                      }}
                    >
                      <Fragment>Office</Fragment>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setDropDownInput("Apartment");
                        dispatch({
                          type: "propertyType",
                          payload: "Apartment",
                        });
                      }}
                    >
                      <Fragment>Apartment</Fragment>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setDropDownInput("House");
                        dispatch({
                          type: "propertyType",
                          payload: "Town House",
                        });
                      }}
                    >
                      <Fragment>House</Fragment>
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        setDropDownInput("Villa");
                        dispatch({ type: "propertyType", payload: "Villa" });
                      }}
                    >
                      <Fragment>Villa</Fragment>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <div>
                  <Link
                    href="/listing/list-view/listing/left-sidebar"
                    className="btn btn-solid btn-flat"
                  >
                    Search
                  </Link>
                </div>
              </form>
            </div>
          </Col>
          <Col lg="5">
            <div className="parallax-right">
              <img
                src="/assets/images/layout/playing.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
