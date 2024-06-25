import React from "react";
import Slider from "react-slick";
import { propertySlider } from "../../data/slickSlider";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";

const ImageSlider = ({ images }) => {
  return (
    <NoSsr>
      <Slider className="property-slider" {...propertySlider}>
        {images?.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={data} className="bg-img" />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );
};

export default ImageSlider;
