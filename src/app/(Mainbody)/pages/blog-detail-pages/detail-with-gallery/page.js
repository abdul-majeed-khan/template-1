"use client";
import React, { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import BodyContent from "@/components/pages/blogDetailPages";
import { propertySlider } from "@/data/slickSlider";
import Breadcrumb from "@/layout/Breadcrumb/Breadcrumb";
import FooterThree from "@/layout/footers/FooterThree";
import NavbarThree from "@/layout/headers/NavbarThree";
import Img from "@/utils/BackgroundImageRatio";
import NoSsr from "@/utils/NoSsr";

const imgData = ["/assets/images/property/4.jpg", "/assets/images/property/16.jpg", "/assets/images/property/14.jpg"];

const DetailWithGallery = () => {
  return (
    <Fragment>
      <NavbarThree />
      <Breadcrumb />
      <BodyContent side={"left"}>
        <Gallery>
          <NoSsr>
            <Slider className="property-slider" {...propertySlider}>
              {imgData.map((data, i) => (
                <Item key={i} original={data} width="1000" height="550">
                  {({ ref, open }) => (
                    <div ref={ref} onClick={open}>
                      <Img src={data} className="bg-img" alt="" />
                    </div>
                  )}
                </Item>
              ))}
            </Slider>
          </NoSsr>
        </Gallery>
      </BodyContent>
      <FooterThree />
    </Fragment>
  );
};

export default DetailWithGallery;
