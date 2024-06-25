import React, { Fragment } from "react";

const PropertyLabel = ({ labels }) => {
  return (
    <>
      {Array.isArray(labels) &&
        labels?.map((values, i) => (
          <Fragment key={i}>
            {values === "sale" && (
              <div>
                <span className='label label-shadow'>Sale</span>
              </div>
            )}
            {values === "no fees" && (
              <div>
                <span className='label label-dark'>no fees</span>
              </div>
            )}
            {values === "open house" && (
              <div>
                <span className='label label-success'>open house</span>
              </div>
            )}
            {values === "sold" && (
              <div>
                <span className='label label-shadow'>Sold</span>
              </div>
            )}
          </Fragment>
        ))}
    </>
  );
};

export default PropertyLabel;
