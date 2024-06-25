/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React, { useState } from "react";
import { Camera } from "react-feather";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import ImageSlider from "../ImageSlider";
import PropertyLabel from "../PropertyLabel";
import ThumbnailSlider from "../ThumbnailSlider";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";

const PropertyBox = ({ data, relativeSlider, video }) => {
  const [load, setLoad] = useState(true);
  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            {relativeSlider ? <ThumbnailSlider images={data.img} videoData={data.video} video={video} /> : <ImageSlider images={data.img} />}
            <div className="labels-left">
              <PropertyLabel labels={data.label} />
            </div>
            {!relativeSlider && (
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{data.img.length || 5}</span>
                </div>
                <div className="overlay-property-box">
                  <a className="effect-round" title="Compare">
                    <AddToCompareProducts id={data.id} />
                  </a>
                  <a className="effect-round like" title="wishlist">
                    <AddToWhishList id={data.id} />
                  </a>
                </div>
              </>
            )}
          </div>

          <div className="property-details">
            <span className="font-roboto">{data.country || "USA"} </span>
            <Link href={{ pathname: Array.isArray(data.img) ? "/property/image-slider" :"/property/image-box", query: {id:data.id} }}>
              <h3>{data.title}</h3>
            </Link>
            <h6>
              {symbol}
              {(data.price * currencyValue).toFixed(2) || (48596.0 * currencyValue).toFixed(2)}*
            </h6>
            <p className="font-roboto">{data.details || "This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."} </p>
            <ul>
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                Bed : {data.bed || 5}
              </li>
              <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                Baths : {data.bath || 5}
              </li>
              <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                Sq Ft : {data.sqft || 5}
              </li>
            </ul>
            <div className="property-btn d-flex">
              <span>{data.date}</span>

              
              <Link href={{ pathname: Array.isArray(data.img) ? "/property/image-slider" :"/property/image-box", query: {id:data.id} }}>
                <button type="button" className="btn btn-dashed btn-pill">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default PropertyBox;
